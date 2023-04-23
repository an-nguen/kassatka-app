import {
  ConsoleLogger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsController } from './modules/products/products.controller'
import configuration from './core/config/configuration'
import { ProductsService } from './modules/products/products.service'
import { CategoriesController } from './modules/categories/categories.controller'
import { CategoriesService } from './modules/categories/categories.service'
import { LoggerMiddleware } from './shared/logger/logger.middleware'
import { KassatkaApiService } from './shared/services/kassatka-api/kassatka-api.service'

// TODO: Add NestJS Swagger Plugin
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    ConsoleLogger,
    KassatkaApiService,
  ],
  exports: [ConsoleLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/*')
  }
}
