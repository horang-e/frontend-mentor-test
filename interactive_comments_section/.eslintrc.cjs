module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/__tests__/*.js'],
  rules: {
    'no-var': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: 'warn',
    'dot-notation': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'error',
  },
};