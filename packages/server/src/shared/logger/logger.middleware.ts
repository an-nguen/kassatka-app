import { ConsoleLogger, Injectable, NestMiddleware } from '@nestjs/common'

// TODO: Replace with NestJS Pino
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: ConsoleLogger) {}
  use(req: any, res: any, next: () => void) {
    this.logger.log(req)
    next()
  }
}
