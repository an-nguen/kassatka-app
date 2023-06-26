import { IPage, IProduct } from '@kassatka/core';
import {
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ProductQueryRequest } from 'core/dtos/product-query-request';
import { PageQueryDto } from '../../shared/dtos/page-query.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(public productsService: ProductService) {}

  @Get()
  public getPage(@Query() query: PageQueryDto): IPage<IProduct> {
    return this.productsService.findAll(query.page, query.pageSize);
  }

  @Post('/query')
  public query(@Req() req: ProductQueryRequest): IPage<IProduct> {
    return this.productsService.findAll(
      req.pageNumber,
      req.pageSize,
      req.sortBy
    );
  }

  @Get(':id')
  public getById(id: number): IProduct {
    const entity = this.productsService.findById(id);
    if (!entity) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return entity;
  }
}
