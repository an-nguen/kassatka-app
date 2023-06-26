import { ICategory } from '../domains/internal';
import { ICrudService } from './crud-service.interface';
import { IPageable } from './pageable.interface';

export type ICategoryService = ICrudService<number, ICategory> &
  IPageable<ICategory>;
