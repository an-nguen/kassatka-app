import { Injectable } from '@angular/core'
import { IPage, IProduct } from '@kassatka/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { AbstractService } from '../../../shared/services/abstract-service'

@Injectable({
  providedIn: 'any',
})
export class ProductService extends AbstractService<number, IProduct> {
  constructor(private httpClient: HttpClient) {
    super(
      httpClient,
      environment.BACKEND_URL + environment.BACKEND_PRODUCT_URL_PATH
    )
  }

  public getPage(
    pageNumber: number,
    pageSize: number,
    sortProperty: string
  ): Observable<IPage<IProduct>> {
    return this._httpClient.post(
      `${environment.BACKEND_URL}/${this._url}/page`,
      {
        pageNumber,
        pageSize,
        sortProperty,
      }
    )
  }
}
