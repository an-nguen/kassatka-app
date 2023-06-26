import { IProduct } from '../domains/internal';
import { ICrudService } from './crud-service.interface';
import { IPageable } from './pageable.interface';

export type IProductService = ICrudService<number, IProduct> &
  IPageable<IProduct>;
