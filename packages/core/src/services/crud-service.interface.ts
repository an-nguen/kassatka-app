export interface ICrudService<TId, TEntity> {
  create(entity: TEntity): TEntity
  update(id: TId, entity: TEntity): TEntity
  delete(id: TId): void
}
