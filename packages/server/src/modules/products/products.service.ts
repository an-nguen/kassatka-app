import { HttpService } from '@nestjs/axios'
import { AxiosError } from 'axios'
import { ConsoleLogger, Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Page, PageBuilder, Product } from '@kassatka/core'
import { differenceInHours } from 'date-fns'
import { ProductQueryParamsBuilder } from './product-query-params'
import {
  catchError,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs'
import { ProductSortProperty } from '../../core/dtos/product-sort-property'
import { PageResponse } from '../../core/dtos/page-response'
import { APP_CONSTANTS } from '../../core/constants'
import { KassatkaApiService } from '../../shared/services/kassatka-api/kassatka-api.service'

@Injectable()
export class ProductsService implements OnModuleInit {
  private products: Product[] = []

  private readonly urlSubdirectory: string = 'commodities'

  private lastTimeUpdate: Date

  constructor(
    private configService: ConfigService,
    private readonly kassatkaApiService: KassatkaApiService,
    private readonly logger: ConsoleLogger
  ) {}

  onModuleInit(): void {
    this.updateProducts()
  }

  public updateProducts() {
    const builder = ProductQueryParamsBuilder.new()
    const params = builder
      .setPage(1)
      .setPageSize(APP_CONSTANTS.pageSize)
      .build()

    this.kassatkaApiService
      .get<PageResponse<Product>>(this.urlSubdirectory, {
        params,
      })
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error)
          throw 'API request failed'
        }),
        switchMap(({ data }) => {
          this.lastTimeUpdate = new Date()

          this.products = this.products.concat(data.items)
          const pages = this.getTotalPages(
            APP_CONSTANTS.pageSize,
            data.pager.count
          )
          if (!pages) return of(null)

          const requests: Observable<Product[]>[] = []

          // array.map() - do not use, replace with .reduce()
          // Observable.map() - can use
          for (let i = 0; i < pages; i++) {
            const queryParams = builder
              .setPage(i)
              .setPageSize(APP_CONSTANTS.pageSize)
              .build()
            const request = this.kassatkaApiService
              .get<PageResponse<Product>>(this.urlSubdirectory, {
                params: queryParams,
              })
              .pipe(map((response) => response.data.items))
            requests.push(request)
          }

          return forkJoin(requests)
        }),
        mergeMap((r) => r)
      )
      .subscribe((items) => {
        if (!items) {
          return
        }

        this.products = this.products.concat(items)
      })
  }

  public findAll(
    pageNumber: number,
    pageSize: number,
    sortBy?: ProductSortProperty
  ): Page<Product> {
    const start = pageNumber * pageSize
    const end = start + pageSize
    return PageBuilder.create<Product>()
      .setPageNumber(pageNumber)
      .setPageSize(pageSize)
      .setPageCount(Math.ceil(this.products.length / pageSize))
      .setItems(this.products.slice(start, end).sort())
      .build()
  }

  public findById(idD: number): Product {
    return this.products.find(({ id }) => id === idD)
  }

  private getTotalPages(pageSize: number, rowCount: number): number {
    let pages = rowCount / pageSize
    if (pages == 0) return 0
    if (pages > 0 && rowCount % pageSize > 0) {
      pages = pages + 1
    }
    return Math.round(pages)
  }
}
