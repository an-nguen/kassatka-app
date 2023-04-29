import { ICrudService } from '@kassatka/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export class AbstractService<TId, TEntity>
  implements ICrudService<TId, TEntity>
{
  protected readonly _url: string
  protected readonly _httpClient: HttpClient

  private constructor(httpClient: HttpClient, url: string) {
    this._url = url
    this._httpClient = httpClient
  }

  public create(entity: TEntity): Observable<TEntity> {
    return this._httpClient.post(`${this._url}`, entity)
  }

  public update(id: TId, entity: TEntity): Observable<TEntity> {
    return this._httpClient.put(`${this._url}/${id}`, entity)
  }

  public delete(id: TId): Observable<void> {
    return this._httpClient.delete(`${this._url}/${id}`)
  }
}
