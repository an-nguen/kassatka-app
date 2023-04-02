import { HttpService } from '@nestjs/axios'
import { AxiosError, AxiosResponse } from 'axios'
import { ConsoleLogger, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Product } from '@kassatka/core'
import defaults from '../common/defaults'
import { differenceInHours } from 'date-fns'
import { ProductQueryParamsBuilder } from './product-query-params'
import { catchError, firstValueFrom, forkJoin, mergeMap } from 'rxjs'
import { Page } from '@kassatka/core'
import { PageBuilder } from '@kassatka/core'
import { ProductSortProperty } from '../common/dtos/product-sort-property'
import { GetResponse } from '../common/dtos/get-response'

@Injectable()
export class ProductsService {
  private products: Product[] = []

  private readonly urlSubdirectory: string = 'commodities'

  private lastTimeUpdate: Date

  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly logger: ConsoleLogger
  ) {
    this.updateProducts().then((status) => {
      logger.log(`Product update status: ${status}`)
    })
  }

  private getTotalPages(pageSize: number, rowCount: number): number {
    let pages = rowCount / pageSize
    if (pages == 0) return 0
    if (pages > 0 && rowCount % pageSize > 0) {
      pages = pages + 1
    }
    return Math.round(pages)
  }

  private hasItBeenMoreThanOneHour(): boolean {
    return (
      !!this.lastTimeUpdate &&
      differenceInHours(new Date(), this.lastTimeUpdate) < 1
    )
  }

  async updateProducts(): Promise<boolean> {
    if (this.hasItBeenMoreThanOneHour()) return false
    const builder = ProductQueryParamsBuilder.new()
    const params = builder.setPage(1).setPageSize(defaults.pageSize).build()
    const response = await firstValueFrom(
      await this.httpService
        .get<GetResponse<Product>>(this.urlSubdirectory, {
          params,
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error)
            throw 'API request failed'
          })
        )
    )
    const data = response.data
    if (data.pager.count <= 0) {
      this.logger.error('There are no products')
      return false
    }
    this.products = this.products.concat(data.items)
    const pages = this.getTotalPages(defaults.pageSize, data.pager.count)

    if (pages > 0) {
      const startAt = data.pager.page
      const pageParams = [...Array(pages).keys()].map(
        (pageIndex) => pageIndex + startAt
      )
      const requests = pageParams.map((i) => {
        const queryParams = builder
          .setPage(i)
          .setPageSize(defaults.pageSize)
          .build()
        return this.httpService.get<GetResponse<Product>>(
          this.urlSubdirectory,
          {
            params: queryParams,
          }
        )
      })
      const items = await firstValueFrom(
        forkJoin(requests).pipe(
          mergeMap((responses: AxiosResponse<GetResponse<Product>>[]) =>
            responses.map((response: AxiosResponse<GetResponse<Product>>) => {
              return response.data.items
            })
          )
        )
      )
      this.products = this.products.concat(items)
    }
    this.lastTimeUpdate = new Date()
    return true
  }

  findAll(
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

  findById(id: number): Product {
    return this.products.find((p) => p.id === id)
  }
}
