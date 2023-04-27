module.exports = {
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', '@angular-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      // Angular app
      files: ['./packages/client/**/*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'prettier',
      ],
      rules: {
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
    },
    {
      files: ['./packages/client/**/*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    // NestJS Server
    {
      files: ['./packages/server/**/*.ts'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['./packages/client/projects/**/*.html'],
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
      './packages/client/projects/*/tsconfig.json',
    ],
    ecmaVersion: 'latest',
  },
  root: true,
}
