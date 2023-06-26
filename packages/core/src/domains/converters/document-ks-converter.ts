import { parseISO } from 'date-fns/fp';
import { IDocument, IDocumentLine } from '../internal';
import { IDocumentKs } from '../kassatka';
import { IDocumentProduct } from '../kassatka/document.interface';
import { IConverter } from './converter.interface';

export class DocumentKsConverter implements IConverter<IDocumentKs, IDocument> {
  private _docProdConverter: IConverter<IDocumentProduct, IDocumentLine>;

  private constructor(
    productDocumentConverter: IConverter<IDocumentProduct, IDocumentLine>
  ) {
    this._docProdConverter = productDocumentConverter;
  }

  public static create = (
    productDocumentConverter: IConverter<IDocumentProduct, IDocumentLine>
  ) => new DocumentKsConverter(productDocumentConverter);

  public convert(src: IDocumentKs): IDocument {
    const dateTime = src.current_time_str
      ? parseISO(src.current_time_str)
      : undefined;

    const docLines: Array<IDocumentLine> = [];
    let total = 0;
    for (const dp of src.products) {
      const docLine = this._docProdConverter.convert(dp);
      total += docLine.total;
      docLines.push(docLine);
    }
    return {
      accountId: src.account_id || 0,
      type: src.docType || 'NONE',
      dateTime: dateTime,
      id: src._id || '',
      isCash: src.isCash,
      lines: docLines,
      organizationId: src.organization_id || undefined,
      status: src.status || undefined,
      total: total,
    };
  }
}
