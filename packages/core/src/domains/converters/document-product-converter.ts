import { IDocumentLine } from '../internal';
import { IDocumentProduct } from '../kassatka/document.interface';
import { IConverter } from './converter.interface';

export class DocumentProductConverter
  implements IConverter<IDocumentProduct, IDocumentLine>
{
  private constructor() {}

  public static create = () => new DocumentProductConverter();

  public convert(src: IDocumentProduct): IDocumentLine {
    // In Kassatka API price property is total property
    const price = src.product.price ?? 0;
    return {
      discount: src.discount || 0,
      price,
      productId: src.product.id ? parseInt(src.product.id) : 0,
      quantity: src.count || 0,
      total: src.price || 0,
    };
  }
}
