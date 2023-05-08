import { ConsoleLogger, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import { APP_CONSTANTS } from '../../../core/constants'
import { AxiosRequestConfig } from 'axios'

// Wrapper around Kassatka API
@Injectable()
export class KassatkaApiService {
  private readonly defaultConfig: AxiosRequestConfig
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: ConsoleLogger,
    private configService: ConfigService
  ) {
    this.defaultConfig = {
      baseURL: this.configService.get<string>(APP_CONSTANTS.config.apiUrlPath),
      headers: {
        [APP_CONSTANTS.api.integrationTokenName]:
          this.configService.get<string>(APP_CONSTANTS.config.apiTokenPath),
      },
    }
  }

  public get<TData>(url: string, config?: AxiosRequestConfig) {
    return this.httpService.get<TData>(url, {
      ...this.defaultConfig,
      ...config,
    })
  }
}
