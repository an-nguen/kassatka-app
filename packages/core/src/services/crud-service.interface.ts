import { Observable } from 'rxjs'

export interface ICrudService<TId, TEntity> {
  create(entity: TEntity): Observable<TEntity>
  update(id: TId, entity: TEntity): Observable<TEntity>
  delete(id: TId): Observable<unknown>
}
