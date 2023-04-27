import { IDocument } from '../domains/internal'
import { IPage } from '../dtos'

export interface IDocumentService {
  getSales(date: Date): Array<IDocument>
  getSalesRange(startDate: Date, endDate: Date): IPage<IDocument>
  getRefunds(date: Date): Array<IDocument>
  getRefundsRange(startDate: Date, endDate: Date): IPage<IDocument>
}
