import { IProduct } from '../internal'
import { IProduct as IProductKs } from '../kassatka/product.interface'
import { IConverter } from './converter.interface'

export class ProductKsConverter implements IConverter<IProductKs, IProduct> {
  private _productKs?: IProductKs

  private constructor() {
    this._productKs = undefined
  }

  static create(): ProductKsConverter {
    return new ProductKsConverter()
  }

  from(objA: IProductKs): ProductKsConverter {
    this._productKs = objA
    return this
  }

  convertTo(): IProduct {
    return <IProduct>{
      barcodes: this._productKs?.barcode ?? [],
      categoryId: this._productKs?.category_id ?? 0,
      freePrice: this._productKs?.free_price ?? true,
      id: this._productKs?.id ?? 0,
      id1C: this._productKs?.code_1c ?? '',
      name: this._productKs?.name ?? '',
      price: this._productKs?.price ?? 0,
    }
  }
}
