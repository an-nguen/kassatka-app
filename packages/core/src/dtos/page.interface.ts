export interface IPageMetadata {
  pageNumber: number
  pageSize: number
  pageCount: number
}

export interface IPage<T> {
  items: T[]
  metadata: IPageMetadata
}
