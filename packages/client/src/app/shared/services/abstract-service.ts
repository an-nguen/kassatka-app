import { ICrudService } from '@kassatka/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export abstract class AbstractService<TId, TEntity>
  implements ICrudService<TId, TEntity>
{
  protected readonly _url: string
  protected readonly _httpClient: HttpClient

  public constructor(httpClient: HttpClient, url: string) {
    this._url = url
    this._httpClient = httpClient
  }

  public create(entity: TEntity): Observable<TEntity> {
    return this._httpClient.post<TEntity>(`${this._url}`, entity)
  }

  public update(id: TId, entity: TEntity): Observable<TEntity> {
    return this._httpClient.put<TEntity>(`${this._url}/${id}`, entity)
  }

  public delete(id: TId): Observable<unknown> {
    return this._httpClient.delete(`${this._url}/${id}`)
  }
}
