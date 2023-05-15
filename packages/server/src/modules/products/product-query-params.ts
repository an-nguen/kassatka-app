export interface ProductQueryParams {
  page: number
  size: number
}

export class ProductQueryParamsBuilder {
  page: number = 0
  size: number = 0

  static new(): ProductQueryParamsBuilder {
    const builder = new ProductQueryParamsBuilder()
    return builder
  }

  setPage(page: number): this {
    this.page = page
    return this
  }

  setPageSize(size: number): this {
    this.size = size
    return this
  }

  build(): ProductQueryParams {
    return {
      page: this.page,
      size: this.size,
    }
  }
}
