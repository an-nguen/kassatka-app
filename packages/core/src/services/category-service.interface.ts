import { ICategory } from '../domains/internal/category.interface'
import { ICrudService } from './crud-service.interface'

export type ICategoryService = ICrudService<number, ICategory>
