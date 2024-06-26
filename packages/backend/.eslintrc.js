module.exports = {
  env: {
    node: true,
    jest: true
  },
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'no-unused-vars': 'warn',
    'new-cap': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'newline-before-return': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 0,
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-computed-key': 'off'
  }
};
