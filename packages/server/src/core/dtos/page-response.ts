import { Pager } from './pager'

export interface PageResponse<T> {
  pager: Pager
  items: Array<T>
}
