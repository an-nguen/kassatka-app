import { IDocument } from '../domains/internal'
import { IPage } from '../dtos'
import { Observable } from 'rxjs'

export interface IDocumentService {
  getSalesRange(startDate: Date, endDate: Date): Observable<IPage<IDocument>>
  getRefundsRange(startDate: Date, endDate: Date): Observable<IPage<IDocument>>
}
