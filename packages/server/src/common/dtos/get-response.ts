import { Pager } from './pager'

export interface GetResponse<T> {
  pager: Pager
  items: Array<T>
}