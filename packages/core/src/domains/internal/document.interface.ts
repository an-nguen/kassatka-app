import { IDocumentLine } from './document-line.interface'

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
