import { Injectable } from '@angular/core'
import { ICategory } from '@kassatka/core'
import { AbstractService } from 'src/app/shared/services/abstract-service'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'any',
})
export class CategoryService extends AbstractService<number, ICategory> {
  constructor(private httpClient: HttpClient) {
    super(
      httpClient,
      environment.BACKEND_URL + environment.BACKEND_CATEGORY_URL_PATH
    )
  }
}
