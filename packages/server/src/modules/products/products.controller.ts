import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { IPage, IProduct } from '@kassatka/core'
import { ProductQueryRequest } from 'core/dtos/product-query-request'

@Controller('products')
export class ProductsController {
  constructor(public productsService: ProductsService) {}

  @Get()
  public getPage(
    @Query(
      'page',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    pageNumber: number,
    @Query(
      'pageSize',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    pageSize: number
  ): IPage<IProduct> {
    if (pageSize <= 0 || pageNumber <= 0) {
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
  public query(@Req() req: ProductQueryRequest): IPage<IProduct> {
    return this.productsService.findAll(
      req.pageNumber,
      req.pageSize,
      req.sortBy
    )
  }

  @Get(':id')
  public getById(id: number): IProduct {
    const entity = this.productsService.findById(id)
    if (!entity) {
      throw new NotFoundException(`Product with id ${id} not found`)
    }
    return entity
  }
}
