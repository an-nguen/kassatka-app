import { ConsoleLogger, Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IPage, IProduct, IProductKs, PageBuilder } from '@kassatka/core'
import { ProductQueryParamsBuilder } from './product-query-params'
import { map, Observable } from 'rxjs'
import { PageResponse } from '../../core/dtos/page-response'
import { KassatkaApiService } from '../../shared/services/kassatka-api/kassatka-api.service'

@Injectable()
export class ProductsService implements OnModuleInit {
  private products: IProduct[] = []

  private readonly urlSubdirectory: string = 'commodities'

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

    this.getProductCount().subscribe({
      next: (count) => {
        this.logger.log(count)
      },
      error: (err) => {
        this.logger.error(err)
      },
    })
    // .pipe(
    //   mergeMap(({ data }) => {
    //     const pages = this.getTotalPages(
    //       APP_CONSTANTS.pageSize,
    //       data.pager.count
    //     )
    //     if (!pages) return of(null)
    //
    //
    //     for (let i = 0; i < pages; i++) {
    //       const queryParams = builder
    //         .setPage(i)
    //         .setPageSize(APP_CONSTANTS.pageSize)
    //         .build()
    //       const request = this.kassatkaApiService
    //         .get<PageResponse<IProductKs>>(this.urlSubdirectory, {
    //           params: queryParams,
    //         })
    //         .pipe(map((response) => response.data.items))
    //     }
    //
    //     return forkJoin(requests)
    //   })
    // )
    // .subscribe((items: IProductKs[]) => {
    //   if (!items) {
    //     return
    //   }
    //
    //   const converter = ProductKsConverter.create()
    //   const convertedItems: IProduct[] = new Array(items.length)
    //   for (let i = 0; i < items.length; i++) {
    //     convertedItems[i] = converter.convert(items[i])
    //   }
    //   this.products = this.products.concat(convertedItems)
    //   this.logger.log('The fetching products is complete')
    // })
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

  private getTotalPages(pageSize: number, rowCount: number): number {
    let pages = rowCount / pageSize
    if (pages == 0) return 0
    if (pages > 0 && rowCount % pageSize > 0) {
      pages = pages + 1
    }
    return Math.round(pages)
  }

  private getProductCount(): Observable<number> {
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
}
