export interface KsPageQuery {
  page: number;
  size: number;
}

export class ProductQueryParamsBuilder {
  page: number = 0;
  size: number = 0;

  static new(): ProductQueryParamsBuilder {
    return new ProductQueryParamsBuilder();
  }

  setPage(page: number): this {
    this.page = page;
    return this;
  }

  setPageSize(size: number): this {
    this.size = size;
    return this;
  }

  build(): KsPageQuery {
    return {
      page: this.page,
      size: this.size,
    };
  }
}
