import angularEslint from '@angular-eslint/eslint-plugin'
import angularEslintTemplate from '@angular-eslint/eslint-plugin-template'
import prettierConfig from 'eslint-config-prettier'
import { defaultTsConfig } from './default-ts-config.js'

const CLIENT_GLOB = './packages/client'

export const clientTsConfig = {
  ...defaultTsConfig,
  plugins: {
    ...defaultTsConfig.plugins,
    '@angular-eslint': angularEslint,
  },
  files: [`${CLIENT_GLOB}/packages/client/**/*.ts`],
  rules: {
    ...defaultTsConfig.rules,
    ...prettierConfig.rules,
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
  },
}
export const clientTemplateConfig = {
  files: [`${CLIENT_GLOB}/**/*.html`],
  plugins: {
    '@angular-eslint/template': angularEslintTemplate,
  },
}
