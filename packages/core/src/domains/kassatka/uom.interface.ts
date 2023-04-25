export interface IUom {
  id?: number
  uom_id?: number
  account_id?: number
  name?: string
  short_name?: string
  created_at?: string
  updated_at?: string
  is_base_type: boolean
  external_code?: string
  is_default: boolean
  okei_code?: number
}
