import {
  DocumentKsConverter,
  DocumentProductConverter,
  IDocument,
  IDocumentKs,
} from '@kassatka/core';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { differenceInDays } from 'date-fns';
import { Observable, map, mergeMap, of } from 'rxjs';
import { KassatkaApiService } from 'shared/services/kassatka-api/kassatka-api.service';
import { KsPageResp } from 'shared/types/ks-page-resp';

@Injectable()
export class DocumentService {
  private readonly _urlSubdirectory = '/documents';
  private readonly _documentKsConverter = DocumentKsConverter.create(
    DocumentProductConverter.create()
  );

  constructor(private readonly _kassatkaApiService: KassatkaApiService) {}

  public getSaleTotal(startDate: Date, endDate: Date): Observable<number> {
    return this.getSaleDocuments(startDate, endDate).pipe(
      mergeMap((docs) => {
        let sum = 0;
        for (let i = 0; i < docs.length; i++) {
          sum += docs[i].total;
        }
        return of(sum);
      })
    );
  }

  public getRefundTotal(startDate: Date, endDate: Date): Observable<number> {
    return this.getRefundDocuments(startDate, endDate).pipe(
      mergeMap((docs) => {
        let sum = 0;
        for (let i = 0; i < docs.length; i++) {
          sum += docs[i].total;
        }
        return of(sum);
      })
    );
  }

  public getSaleDocuments(
    startDate: Date,
    endDate: Date
  ): Observable<IDocument[]> {
    return this._getDocuments(startDate, endDate).pipe(
      map((response) => {
        const items = response.data.data.items;
        const saleDocs = items.filter((d) => d.docType === 'SALE');
        const convertedDocs: IDocument[] = new Array(saleDocs.length);
        for (let i = 0; i < saleDocs.length; i++) {
          convertedDocs[i] = this._documentKsConverter.convert(saleDocs[i]);
        }
        return convertedDocs;
      })
    );
  }

  public getRefundDocuments(
    startDate: Date,
    endDate: Date
  ): Observable<IDocument[]> {
    return this._getDocuments(startDate, endDate).pipe(
      map((response) => {
        const items = response.data.data.items;
        const refundDocs = items.filter((d) => d.docType === 'RETURN');
        const convertedDocs: IDocument[] = new Array(refundDocs.length);
        for (let i = 0; i < refundDocs.length; i++) {
          convertedDocs[i] = this._documentKsConverter.convert(refundDocs[i]);
        }
        return convertedDocs;
      })
    );
  }

  private _getDocuments(
    startDate: Date,
    endDate: Date
  ): Observable<AxiosResponse<KsPageResp<IDocumentKs>>> {
    if (differenceInDays(startDate, endDate) > 7) {
      throw new BadRequestException();
    }
    return this._kassatkaApiService.get<KsPageResp<IDocumentKs>>(
      this._urlSubdirectory
    );
  }
}
