import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { Page, Product } from '@kassatka/core'
import { ProductQueryRequest } from '../common/dtos/product-query-request'

@Controller('products')
export class ProductsController {
  constructor(public productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('page') pageNumber: number,
    @Query('pageSize') pageSize: number
  ): Page<Product> {
    if (pageSize <= 0 || pageNumber < 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'The page size/page number cannot be less than 0',
        },
        HttpStatus.BAD_REQUEST
      )
    }
    return this.productsService.findAll(pageNumber, pageSize)
  }

  @Post('/query')
  query(@Req() req: ProductQueryRequest): Page<Product> {
    return this.productsService.findAll(
      req.pageNumber,
      req.pageSize,
      req.sortBy
    )
  }

  @Get(':id')
  findById(id: number): Product {
    return this.productsService.findById(id)
  }
}
