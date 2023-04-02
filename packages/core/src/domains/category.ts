import { Sortable } from '../decorators/sortable'

export class Category {
  id = 0
  category_id = 0
  parent_id = 0
  account_id = 0
  @Sortable()
  name?: string
  color?: string
  code_1c?: string
}
