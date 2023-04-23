// Bad practise
export interface Pager {
  size: number
  page: number
  hasNext: boolean
  hasPrev: boolean
  from: number
  to: number
  count: number
}
// Best practise
