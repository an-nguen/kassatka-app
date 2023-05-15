import * as process from 'process'

export const configuration = () => ({
  port: parseInt(process.env.PORT || '', 10) || 8080,
  api: {
    url: process.env['API_URL'],
    token: process.env['API_TOKEN'],
  },
})
