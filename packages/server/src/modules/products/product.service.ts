import {
  IPage,
  IProduct,
  IProductKs,
  PageBuilder,
  ProductKsConverter,
} from '@kassatka/core';
import { ConsoleLogger, Injectable, OnModuleInit } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CONST } from 'core/constants';
import { PageResponse } from 'core/dtos/page-response';
import { Observable, forkJoin, map, mergeMap, of, take } from 'rxjs';
import { KassatkaApiService } from 'shared/services/kassatka-api/kassatka-api.service';
import { KsPageResp } from 'shared/types/ks-page-resp';
import { ProductQueryParamsBuilder } from './ks-page-query';

@Injectable()
export class ProductService implements OnModuleInit {
  private products: IProduct[] = [];

  private readonly urlSubdirectory: string = '/commodities';

  constructor(
    private readonly kassatkaApiService: KassatkaApiService,
    private readonly logger: ConsoleLogger
  ) {}

  public onModuleInit(): void {
    this.updateProducts();
  }

  public updateProducts() {
    this.logger.log('Starting to fetch product list');
    const queryParamsBuilder = ProductQueryParamsBuilder.new();

    this._getProductCount()
      .pipe(
        take(1),
        map((overallCount: number) => {
          return {
            overallCount,
            requestCount: this.calcPageCount(CONST.api.pageSize, overallCount),
          };
        }),
        mergeMap(({ overallCount, requestCount }) => {
          const requests: Observable<KsPageResp<IProductKs>>[] = new Array(
            requestCount
          );
          for (let i = 0; i < requestCount; i++) {
            const params = queryParamsBuilder
              .setPage(i + 1)
              .setPageSize(CONST.api.pageSize)
              .build();
            requests[i] = this.kassatkaApiService.get<PageResponse<IProductKs>>(
              this.urlSubdirectory,
              {
                params,
              }
            );
          }

          return forkJoin({
            overallCount: of(overallCount),
            responses: forkJoin(requests),
          });
        })
      )
      .subscribe({
        next: (result) => {
          this._handleResponses(result.overallCount, result.responses);
        },
        error: (err) => {
          this.logger.error(err);
        },
      });
  }

  public findAll(
    pageNumber: number,
    pageSize: number,
    sortBy?: string
  ): IPage<IProduct> {
    const start = pageNumber * pageSize;
    const end = start + pageSize;
    return PageBuilder.create<IProduct>()
      .setPageNumber(pageNumber)
      .setPageSize(pageSize)
      .setPageCount(Math.ceil(this.products.length / pageSize))
      .setItems(this.products.slice(start, end).sort())
      .build();
  }

  public findById(idD: number): IProduct | undefined {
    return this.products.find(({ id }) => id === idD);
  }

  private calcPageCount(
    itemCountOnPage: number,
    overallItemCount: number
  ): number {
    return Math.ceil(overallItemCount / itemCountOnPage);
  }

  private _getProductCount(): Observable<number> {
    const params = ProductQueryParamsBuilder.new()
      .setPage(1)
      .setPageSize(1)
      .build();
    return this.kassatkaApiService
      .get<PageResponse<IProductKs>>(this.urlSubdirectory, { params })
      .pipe(
        map((response) => {
          return response.data.pager.count;
        })
      );
  }

  private _handleResponses(
    overallCount: number,
    responses: AxiosResponse<PageResponse<IProductKs>>[]
  ) {
    const converter = ProductKsConverter.create();
    let productsIndex = 0;
    this.products = new Array(overallCount);
    for (
      let responseIndex = 0;
      responseIndex < responses.length;
      responseIndex++
    ) {
      const response = responses[responseIndex];

      for (let i = 0; i < response.data.items.length; i++) {
        const item = response.data.items[i];
        this.products[productsIndex] = converter.convert(item);
        productsIndex++;
      }
    }
  }
}
