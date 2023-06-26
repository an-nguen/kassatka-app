import { ICategory } from '../internal';
import { ICategoryKs } from '../kassatka';
import { IConverter } from './converter.interface';

export class CategoryKsConverter implements IConverter<ICategoryKs, ICategory> {
  private constructor() {}

  public static create = () => new CategoryKsConverter();

  public convert(obj: ICategoryKs): ICategory {
    return {
      accountId: obj.account_id || undefined,
      code1C: obj.code_1c || undefined,
      color: obj.color || undefined,
      id: obj.id || 0,
      name: obj.name || undefined,
      parentId: obj.parent_id || undefined,
    };
  }
}
