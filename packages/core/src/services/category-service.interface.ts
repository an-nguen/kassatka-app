import { ICategory } from '../domains/internal'
import { ICrudService } from './crud-service.interface'

export type ICategoryService = ICrudService<number, ICategory>
