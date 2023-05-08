import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { ConsoleLogger } from '@nestjs/common'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { APP_CONSTANTS } from './core/constants'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  app.enableCors()
  app.useLogger(app.get(ConsoleLogger))
  const configService = app.get<ConfigService>(ConfigService)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Kassatka Local API')
    .setDescription('Internal API that works with Kassatka')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)
  const port = configService.get<number>(APP_CONSTANTS.config.portPath)
  await app.listen(port)
}

bootstrap()
