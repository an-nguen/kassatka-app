import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import { APP_CONSTANTS } from '../../../core/constants'
import { AxiosRequestConfig } from 'axios'

// Wrapper around Kassatka API
@Injectable()
export class KassatkaApiService {
  private readonly httpHeaders: object
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {
    this.httpHeaders = {
      baseURL: this.configService.get(APP_CONSTANTS.cfgApiUrlPath),
      headers: {
        [APP_CONSTANTS.integrationTokenName]: this.configService.get(
          APP_CONSTANTS.cfgApiTokenPath
        ),
      },
    }
  }

  public get<TData>(url: string, config?: AxiosRequestConfig) {
    return this.httpService.get<TData>(url, {
      ...config,
      headers: this.httpHeaders,
    })
  }
}
