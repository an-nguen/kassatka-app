import { HttpModule } from '@nestjs/axios'
import {
  ConsoleLogger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from 'app.controller'
import { AppService } from 'app.service'
import { configuration } from 'core/configuration'
import { CategoryController } from 'modules/category/category.controller'
import { CategoryService } from 'modules/category/category.service'
import { DocumentController } from 'modules/document/document.controller'
import { DocumentService } from 'modules/document/document.service'
import { ProductController } from 'modules/products/product.controller'
import { ProductService } from 'modules/products/product.service'
import { KassatkaApiService } from 'shared/services/kassatka-api/kassatka-api.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule,
  ],
  controllers: [
    AppController,
    ProductController,
    CategoryController,
    DocumentController,
  ],
  providers: [
    AppService,
    ProductService,
    CategoryService,
    ConsoleLogger,
    KassatkaApiService,
    DocumentService,
  ],
  exports: [ConsoleLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {}
}
