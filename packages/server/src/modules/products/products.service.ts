import { ConsoleLogger, Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IPage, IProduct, IProductKs, PageBuilder } from '@kassatka/core'
import { ProductQueryParamsBuilder } from './product-query-params'
import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  range,
  take,
  tap,
  toArray,
} from 'rxjs'
import { PageResponse } from '../../core/dtos/page-response'
import { KassatkaApiService } from '../../shared/services/kassatka-api/kassatka-api.service'
import { CONST } from '../../core/constants'
import { performance } from 'perf_hooks'
import { response } from 'express'
import { AxiosResponse } from 'axios'

@Injectable()
export class ProductsService implements OnModuleInit {
  private products: IProduct[]

  private readonly urlSubdirectory: string = '/commodities'

  constructor(
    private configService: ConfigService,
    private readonly kassatkaApiService: KassatkaApiService,
    private readonly logger: ConsoleLogger
  ) {}

  public onModuleInit(): void {
    this.updateProducts()
  }

  public updateProducts() {
    this.logger.log('Starting to fetch product list')

    this._getProductCount()
      .pipe(take(1))
      .subscribe({
        next: (overallCount) => {
          const queryParamsBuilder = ProductQueryParamsBuilder.new()
          const requestCount = this.calcPageCount(
            CONST.api.pageSize,
            overallCount
          )

          const requests = new Array<
            Observable<AxiosResponse<PageResponse<IProductKs>>>
          >(requestCount)
          for (let i = 0; i < requestCount; i++) {
            requests[i] = this.kassatkaApiService.get<PageResponse<IProductKs>>(
              this.urlSubdirectory,
              {
                params: queryParamsBuilder
                  .setPage(i + 1)
                  .setPageSize(CONST.api.pageSize)
                  .build(),
              }
            )
          }

          forkJoin<AxiosResponse<PageResponse<IProductKs>>[]>(
            requests
          ).subscribe({
            next: (responses) => {
              for (let i = 0; i < responses.length; i++) {
                this.products.concat(...responses[i].data.items)
              }
            },
          })
        },
        error: (err) => {
          this.logger.error(err)
        },
      })
  }

  public findAll(
    pageNumber: number,
    pageSize: number,
    sortBy?: string
  ): IPage<IProduct> {
    const start = pageNumber * pageSize
    const end = start + pageSize
    return PageBuilder.create<IProduct>()
      .setPageNumber(pageNumber)
      .setPageSize(pageSize)
      .setPageCount(Math.ceil(this.products.length / pageSize))
      .setItems(this.products.slice(start, end).sort())
      .build()
  }

  public findById(idD: number): IProduct {
    return this.products.find(({ id }) => id === idD)
  }

  private calcPageCount(
    itemCountOnPage: number,
    overallItemCount: number
  ): number {
    return Math.ceil(overallItemCount / itemCountOnPage)
  }

  private _getProductCount(): Observable<number> {
    const params = ProductQueryParamsBuilder.new()
      .setPage(1)
      .setPageSize(1)
      .build()
    return this.kassatkaApiService
      .get<PageResponse<IProductKs>>(this.urlSubdirectory, { params })
      .pipe(
        map((response) => {
          return response.data.pager.count
        })
      )
  }

  private _handleResponses(
    overallCount: number,
    responses: AxiosResponse<PageResponse<IProductKs>>[]
  ) {
    const listIndex = 0
    const convertedList = new Array(overallCount)
    for (const response of responses) {
    }
    this.products = convertedList
  }
}
