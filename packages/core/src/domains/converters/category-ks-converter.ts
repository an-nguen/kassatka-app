import { IConverter } from './converter.interface'
import { ICategoryKs } from '../kassatka'
import { ICategory } from '../internal/category.interface'

export class CategoryKsConverter implements IConverter<ICategoryKs, ICategory> {
  private _categoryKs?: ICategoryKs

  private constructor() {
    this._categoryKs = undefined
  }

  static create() {
    return new CategoryKsConverter()
  }

  public from(src: ICategoryKs): IConverter<ICategoryKs, ICategory> {
    this._categoryKs = src
    return this
  }

  public convertTo(): ICategory {
    return <ICategory>{
      accountId: this._categoryKs?.account_id ?? 0,
      code1C: this._categoryKs?.code_1c,
      color: this._categoryKs?.color,
      id: this._categoryKs?.id,
      name: this._categoryKs?.name ?? '',
      parentId: this._categoryKs?.parent_id,
    }
  }
}
