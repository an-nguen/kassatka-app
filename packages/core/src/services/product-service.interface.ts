import { IProduct } from '../domains/internal'
import { IPage } from '../dtos'
import { ICrudService } from './crud-service.interface'

export interface IProductService extends ICrudService<number, IProduct> {
  getPage(
    pageNumber: number,
    pageSize: number,
    sortProperty: string
  ): IPage<IProduct>
}
