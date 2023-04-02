export interface PageMetadata {
  pageNumber: number
  pageSize: number
  pageCount: number
}

export interface Page<T> {
  items: T[]
  metadata: PageMetadata
}
