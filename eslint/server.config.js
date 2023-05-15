import { defaultTsConfig } from './default-ts-config.js'

const SERVER_GLOB = './packages/server'

export const serverConfig = {
  ...defaultTsConfig,
  files: [`${SERVER_GLOB}/**/*.ts`],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
