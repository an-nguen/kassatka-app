import {
  ConsoleLogger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import configuration, { getEnvFilePaths } from './config/configuration';
import { ProductsService } from './products/products.service';
import { HttpModule } from '@nestjs/axios';
import { getFactoryOfHttpModuleOptions } from './common/http/common';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: getEnvFilePaths(),
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: getFactoryOfHttpModuleOptions(),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService, CategoriesService, ConsoleLogger],
  exports: [ConsoleLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/*');
  }
}
