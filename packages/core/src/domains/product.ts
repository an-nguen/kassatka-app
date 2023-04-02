import { Sortable } from '../decorators/sortable'

export enum NomenclatureType {
  PRODUCT = 'PRODUCT',
  EXCISABLE_GOODS = 'EXCISABLE_GOODS',
  WORK = 'WORK',
  SERVICE = 'SERVICE',
}

export class Product {
  @Sortable()
  id = 0
  nomenclature_id = 0
  @Sortable()
  name?: string
  price = 0
  vat_type?: string
  free_price = true
  created_at?: string
  updated_at?: string
  deleted_at?: string
  is_favorite?: number
  agent_type?: string
  account_id?: number
  category_id?: number
  uom?: string
  uom_code?: string
  barcode?: string[]
  code_1c?: string
  nomenclature_type?: NomenclatureType
  tax_mode?: string
}
