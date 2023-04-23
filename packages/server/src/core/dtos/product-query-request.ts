import { ProductSortProperty } from './product-sort-property'

export interface ProductQueryRequest {
  pageNumber: number
  pageSize: number
  sortBy: ProductSortProperty
}
