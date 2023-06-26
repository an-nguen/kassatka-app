import { NumberType, StringType } from '../common';

export interface ICategory {
  id: NumberType;
  category_id: NumberType;
  parent_id: NumberType;
  account_id: NumberType;
  name: StringType;
  color: StringType;
  show_on_tablet: boolean;
  order_by: NumberType;
  code_1c: StringType;
  section: NumberType;
  created_at: StringType;
  updated_at: StringType;
  deleted_at: StringType;
}
