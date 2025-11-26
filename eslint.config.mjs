import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ...globals.browser,
      process: 'readonly'
    }
  },
  {
    rules: {
      //'import/extensions': ['error', 'always'],
      'quotes': ['error', 'single'],
      'semi': 'error',
      'prefer-const': ['error', { 'destructuring': 'all' }],
      'no-unused-vars': 'error',
    },
  }
]);
