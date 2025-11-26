import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage',
      'playwright-report',
      'test-results',
      'allure-report',
      'allure-results'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly'
      }
    }
  },
  {
    rules: {
      'quotes': ['error', 'single'],
      'semi': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-unused-vars': 'error'
    }
  }
]);
