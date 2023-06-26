import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDocument, IDocumentService, IPage } from '@kassatka/core';
import { formatISO } from 'date-fns/fp';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any',
})
export class DocumentService implements IDocumentService {
  private readonly _documentPath: string;
  private readonly _httpClient: HttpClient;

  constructor(private httpClient: HttpClient) {
    this._httpClient = httpClient;
    this._documentPath = environment.BACKEND_DOCUMENT_URL_PATH;
  }

  public getPage(
    page: number,
    pageSize: number,
    sortBy?: string[] | undefined
  ): Observable<IPage<IDocument>> {
    throw new Error('Method not implemented.');
  }

  public getRefundsRange(
    startDate: Date,
    endDate: Date
  ): Observable<IPage<IDocument>> {
    return this.httpClient.get<IPage<IDocument>>(
      `${environment.BACKEND_URL}/${this._documentPath}/refunds`,
      {
        params: new HttpParams()
          .set('startDate', formatISO(startDate))
          .set('endDate', formatISO(endDate)),
      }
    );
  }

  public getSalesRange(
    startDate: Date,
    endDate: Date
  ): Observable<IPage<IDocument>> {
    return this.httpClient.get<IPage<IDocument>>(
      `${environment.BACKEND_URL}/${this._documentPath}/sales`,
      {
        params: new HttpParams()
          .set('startDate', formatISO(startDate))
          .set('endDate', formatISO(endDate)),
      }
    );
  }
}
