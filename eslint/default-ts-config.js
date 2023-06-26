import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { fileURLToPath } from 'url'

console.log(fileURLToPath(new URL('.', import.meta.url)))

export const defaultTsConfig = {
  plugins: { '@typescript-eslint': tsEslint },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url)),
      project: ['../tsconfig.eslint.json', '../packages/*/tsconfig.json'],
      ecmaVersion: 'latest',
    },
  },
  rules: { ...tsEslint.configs.recommended.rules },
}
