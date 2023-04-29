import { IProduct } from '../domains/internal'
import { IPage } from '../dtos'
import { ICrudService } from './crud-service.interface'
import { Observable } from 'rxjs'

export interface IProductService extends ICrudService<number, IProduct> {
  getPage(
    pageNumber: number,
    pageSize: number,
    sortProperty: string
  ): Observable<IPage<IProduct>>
}
