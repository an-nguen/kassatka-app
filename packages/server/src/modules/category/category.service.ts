import { ICategory, ICategoryService, IPage } from '@kassatka/core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService implements ICategoryService {
  public create(entity: ICategory): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  public update(id: number, entity: ICategory): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  public delete(id: number): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
  public getPage(
    page: number,
    pageSize: number,
    sortBy?: string[] | undefined
  ): Observable<IPage<ICategory>> {
    throw new Error('Method not implemented.');
  }
}
