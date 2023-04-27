export interface IDocument {
  id?: string
  dateTime?: Date
  isCash: boolean
  accountId?: number
  organizationId?: number
  lines: Array<IDocumentLine>
  total: number
  status?: string
}

export interface IDocumentLine {
  productId: number
  price: number
  quantity: number
  total: number
  discount: number
}
