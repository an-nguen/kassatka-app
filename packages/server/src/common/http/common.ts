import { HttpModuleOptions } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import defaults from '../defaults'

export const getFactoryOfHttpModuleOptions = () => {
  return async (configService: ConfigService): Promise<HttpModuleOptions> => ({
    baseURL: configService.get(defaults.cfgApiUrlPath),
    headers: {
      [defaults.integrationTokenName]: configService.get(
        defaults.cfgApiTokenPath
      ),
    },
  })
}
