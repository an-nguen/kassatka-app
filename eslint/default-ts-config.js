import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { URL } from 'url'

export const defaultTsConfig = {
  plugins: { '@typescript-eslint': tsEslint },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      tsconfigRootDir: new URL('./', import.meta.url).pathname,
      project: ['../tsconfig.eslint.json', '../packages/*/tsconfig.json'],
      ecmaVersion: 'latest',
    },
  },
  rules: { ...tsEslint.configs.recommended.rules },
}
