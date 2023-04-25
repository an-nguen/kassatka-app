import { IProduct } from '../domains/internal'
import { IPage } from '../dtos/page.interface'

export interface IProductService {
  getPage(
    pageNumber: number,
    pageSize: number,
    sortProperty: string
  ): IPage<IProduct>
  create(product: IProduct): IProduct
  update(id: number, product: IProduct): IProduct
  delete(id: number): void
}
