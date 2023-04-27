import { NumberType, StringType } from '../common'

export interface IDocument {
  _id: StringType
  receipt_from: StringType
  externalID: StringType
  cloudReceipt: boolean
  complex: unknown[] | null | undefined
  packageName: StringType
  non_cash: NumberType
  cash: NumberType
  isCash: boolean
  correlation_id: StringType
  account_id: NumberType
  account?: IAccount
  organization_id: NumberType
  organization?: Organization
  store_id: NumberType
  store?: Store
  warehouse_id: NumberType
  warehouse?: Warehouse
  work_place_id: NumberType
  work_place?: WorkPlace
  user_id: NumberType
  user?: IUser
  check_num: NumberType
  doc_time?: IDocTime
  current_time: NumberType
  local_time?: ILocalTime
  current_time_str: StringType
  docType: StringType
  summ: NumberType
  products_amount: NumberType
  device_id: NumberType
  device?: unknown
  total_w_discount: NumberType
  total_wo_discount: NumberType
  total_discount: NumberType
  applied_bonuses: NumberType
  total_vat: NumberType
  kassatkaVersion: NumberType
  tax_mode: NumberType
  inner_load_time: NumberType
  products: Array<IDocumentProduct>
  additional_info?: IAdditionalInfo
  updated_at: StringType
  created_at: StringType
  status: StringType
  fiscal_mode: boolean
}

interface IAccount {
  id: NumberType
  guid: StringType
  name: StringType
  idt: StringType
  integration_type: StringType
  balance: StringType
  tariff_first_day: StringType
  tariff_last_day: StringType
  tariff_id: NumberType
  grace_date: StringType
  created_at: StringType
  updated_at: StringType
  deleted_at: StringType
  country_code: StringType
}

export interface Organization {
  id: NumberType
  guid: StringType
  account_id: NumberType
  name: StringType
  form_id: NumberType
  inn: StringType
  ogrn: StringType
  legal_address: StringType
  created_at: StringType
  updated_at: StringType
  deleted_at: StringType
  lock_edit: NumberType
  logo_url: StringType
  external_code: StringType
  cloud_group_id: StringType
  send_to_cloud: NumberType
  contact_phone: StringType
  contact_fio: StringType
  bik: StringType
  account_number: StringType
  code_ifns: StringType
  kpp: StringType
}

export interface Store {
  id: NumberType
  guid: StringType
  account_id: NumberType
  organization_id: NumberType
  town_id: NumberType
  name: StringType
  address: StringType
  default_warehouse_id: NumberType
  updated_at: StringType
  price_list_id: StringType
  floor_total_coast: NumberType
  external_code: StringType
}

export interface Warehouse {
  id: NumberType
  name: StringType
  address: StringType
  store_id: NumberType
}

export interface WorkPlace {
  id: NumberType
  guid: StringType
  parent_id: NumberType
  store_id: NumberType
  name: StringType
  idt: StringType
  workplace_type: StringType
  device_id: NumberType
  device_config_id: NumberType
  created_at: StringType
  updated_at: StringType
  deleted_at: StringType
  workplace_guid: StringType
  log_level: StringType
  add_info: AddInfo
  sbp_active: NumberType
  silent: NumberType
}

export interface AddInfo {
  log_request: LogRequest
}

export interface LogRequest {
  date: StringType
  status: StringType
  file_path: StringType
}

export interface IUser {
  id: NumberType
  guid: StringType
  name: StringType
  email: StringType
  account_id: NumberType
  role_id: NumberType
  auth_pin: NumberType
  is_active: NumberType
  can_web_login: NumberType
  tablet_hide_x_report: NumberType
  created_at: StringType
  updated_at: StringType
  deleted_at: StringType
  inn: StringType
  locale: StringType
  last_notification_id: NumberType
  notifications_settings: StringType
  notifications_enabled: NumberType
}

export interface IDocTime {
  $date: IDate
}

export interface IDate {
  $numberLong: StringType
}

export interface ILocalTime {
  $date: IDate
}

export interface IAdditionalInfo {
  additionalInfo: StringType
  advance: NumberType
  bankRemainsManual: NumberType
  cardOut: NumberType
  cardPayments: NumberType
  cashRemainsManual: NumberType
  checkCount: NumberType
  isAutoClose: boolean
  moneyAdd: NumberType
  moneyInCashbox: NumberType
  moneyOut: NumberType
  revenue: NumberType
  workShiftStartTime: StringType
}

export interface IDocumentProduct {
  count: NumberType
  discount: NumberType
  pay_attribute_type: NumberType
  price: NumberType
  price_w_discount: NumberType
  price_wo_discount: NumberType
  product: {
    MarkCode: StringType
    accountingPrice: NumberType
    alcCodeList: Array<StringType>
    alcoholByVolume: NumberType
    alcoholProductKindCode: NumberType
    articul: StringType
    buyPrice: NumberType
    color: NumberType
    currentRemainders: NumberType
    freePrice: boolean
    freeSale: boolean
    group: StringType
    isFavorite: boolean
    isRemaindersControl: boolean
    is_weight: boolean
    nomenclatureType: StringType
    price: NumberType
    priority: NumberType
    productType: StringType
    tareVolume: NumberType
    tax: NumberType
    taxModes: NumberType
    unit: StringType
    vatSum: NumberType
    vatType: StringType
    id: StringType
    name: StringType
  }
  vatSumm: NumberType
}
