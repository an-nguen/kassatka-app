import { AxiosResponse } from 'axios'
import { PageResponse } from 'core/dtos/page-response'

export type KsPageResp<T> = AxiosResponse<PageResponse<T>>
