module.exports = {
  extends: ['./packages/eslint-config-airbnb-base-ts/base.js', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: 'test/*.tsx',
      settings: {
        react: {
          version: '17', // instead of 'detect'
        },
      },
      extends: ['./packages/eslint-config-airbnb-ts/index.js', 'prettier'],
    },
  ],
};
