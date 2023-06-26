import { Observable } from 'rxjs';
import { IDocument } from '../domains/internal';
import { IPage } from '../dtos';
import { IPageable } from './pageable.interface';

export interface IDocumentService extends IPageable<IDocument> {
  getSalesRange(startDate: Date, endDate: Date): Observable<IPage<IDocument>>;
  getRefundsRange(startDate: Date, endDate: Date): Observable<IPage<IDocument>>;
}
