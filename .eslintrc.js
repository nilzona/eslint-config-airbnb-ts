module.exports = {
  extends: ['./packages/airbnb-base-ts/base.js', 'prettier'],
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
      extends: ['./packages/airbnb-ts/index.js', 'prettier'],
    },
  ],
};
