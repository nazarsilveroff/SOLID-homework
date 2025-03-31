import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier,
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-console': 'off',
            'max-len': ['error', { code: 120 }],

            // Prettier як правило ESLint
            'prettier/prettier': 'error',
        },
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier, // вимикає конфліктуючі ESLint правила
);
