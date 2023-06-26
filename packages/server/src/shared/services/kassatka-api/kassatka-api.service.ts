import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { CONST } from 'core/constants';

// Wrapper around Kassatka API
@Injectable()
export class KassatkaApiService {
  private readonly defaultConfig: AxiosRequestConfig;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
  ) {
    this.defaultConfig = {
      baseURL: this.configService.get<string>(CONST.config.apiUrlPath),
      headers: {
        [CONST.api.integrationTokenName]: this.configService.get<string>(
          CONST.config.apiTokenPath
        ),
      },
    };
  }

  public get<TData>(url: string, config?: AxiosRequestConfig) {
    return this.httpService.get<TData>(url, {
      ...this.defaultConfig,
      ...config,
    });
  }
}
