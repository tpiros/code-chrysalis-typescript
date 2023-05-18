module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
  },
  rules: { '@typescript-eslint/no-explicit-any': 'error' },
};
