import { Observable } from 'rxjs';
import { IPage } from '../dtos';

export interface IPageable<TData> {
  getPage(
    page: number,
    pageSize: number,
    sortBy?: Array<string>
  ): Observable<IPage<TData>>;
}
