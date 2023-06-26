import { IProduct } from '../internal';
import { IProduct as IProductKs } from '../kassatka/product.interface';
import { IConverter } from './converter.interface';

export class ProductKsConverter implements IConverter<IProductKs, IProduct> {
  private constructor() {}

  static create(): ProductKsConverter {
    return new ProductKsConverter();
  }

  public convert(src: IProductKs): IProduct {
    const barcodes: Array<string> = [];
    for (const barcode of src.barcode) if (barcode) barcodes.push(barcode);
    return {
      barcodes: barcodes,
      categoryId: src.category_id ?? 0,
      freePrice: src.free_price ?? true,
      id: src.id ?? 0,
      id1C: src.code_1c ?? '',
      name: src.name ?? '',
      price: src.price ?? 0,
    };
  }
}
