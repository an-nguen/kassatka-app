import { IPage } from './page.interface'

export class PageBuilder<T> {
  private items: T[] = []
  private pageNumber = 0
  private pageSize = 0
  private pageCount = 0

  static create<T>(): PageBuilder<T> {
    return new PageBuilder()
  }

  setItems(items: T[]): PageBuilder<T> {
    this.items = items
    return this
  }

  setPageNumber(pageNumber: number): PageBuilder<T> {
    this.pageNumber = pageNumber
    return this
  }

  setPageSize(pageSize: number): PageBuilder<T> {
    this.pageSize = pageSize
    return this
  }

  setPageCount(count: number) {
    this.pageCount = count
    return this
  }

  build(): IPage<T> {
    return {
      items: this.items,
      metadata: {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        pageCount: this.pageCount,
      },
    }
  }
}
