import { ICategory, IPage } from '@kassatka/core';
import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PageQueryDto } from '../../shared/dtos/page-query.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  public constructor(private categoryService: CategoryService) {}

  @Get()
  public getPage(@Query() query: PageQueryDto): Observable<IPage<ICategory>> {
    return this.categoryService.getPage(query.page, query.pageSize);
  }
}
