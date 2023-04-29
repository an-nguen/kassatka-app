import { Injectable } from '@angular/core'
import { ICategory } from '@kassatka/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { AbstractService } from '../abstract-service'

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends AbstractService<number, ICategory> {
  constructor(private httpClient: HttpClient) {
    super(
      httpClient,
      environment.BACKEND_URL + environment.BACKEND_CATEGORY_URL_PATH
    )
  }
}
