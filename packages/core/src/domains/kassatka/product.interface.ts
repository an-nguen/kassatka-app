import { NumberType, StringType } from '../common';

export interface IProduct {
  id: number;
  nomenclature_id: NumberType;
  name: StringType;
  price: NumberType;
  vat_type: StringType;
  free_price: boolean;
  created_at: StringType;
  updated_at: StringType;
  deleted_at: StringType;
  is_favorite: NumberType;
  agent_type: StringType;
  account_id: NumberType;
  category_id: NumberType;
  uom: StringType;
  uom_code: StringType;
  barcode: StringType[];
  code_1c: StringType;
  nomenclature_type: StringType;
  tax_mode: StringType;
}
