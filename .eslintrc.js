module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'import/extensions': 'off',
    'arrow-parens': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'array-bracket-newline': ['error', { multiline: true }],
    'array-element-newline': ['error', { multiline: true }],
  },
  settings: {},
};
