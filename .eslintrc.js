module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1, // Максимум 1 атрибут для однострочных тегов
        multiline: {
          max: 1, // Максимум 1 атрибут для многострочных тегов
          allowFirstLine: true, // Разрешить первый атрибут на первой строке
        },
      },
    ],
  }
};