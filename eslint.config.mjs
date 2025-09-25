import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true, modules: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        pragma: 'h',
        version: '16.0',
      },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: { project: './tsconfig.json' },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,

      'no-console': 0,
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'import/prefer-default-export': 'off',
      'no-debugger': 'warn',
      indent: 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      ],
      'max-len': [
        'error',
        {
          code: 150,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'prefer-destructuring': 'off',
      'arrow-parens': [0, 'as-needed'],
      'comma-dangle': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'lines-between-class-members': 'off',
      'object-curly-newline': 'off',
      'no-multiple-empty-lines': 'off',
      radix: 'off',
      'eol-last': 'off',
      'no-useless-constructor': 'off',

      // simple-import-sort
      'import/order': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',

      // TS rules
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, vars: 'local' }],
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // React rules
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // a11y
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/autocomplete-valid': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'jsx-a11y/no-noninteractive-tabindex': 'error',
      'jsx-a11y/mouse-events-have-key-events': 'error',

      // expensive import rules
      'import/no-cycle': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'off', overrides: { properties: 'explicit' } },
      ],
    },
  },
];
