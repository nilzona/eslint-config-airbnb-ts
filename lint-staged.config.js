module.exports = {
  '**/*.{json,md,yml}': ['prettier --write'],
  '**/*.js': ['prettier --write', 'eslint --cache --fix'],
  '.editorconfig': ['prettier --write'],
  LICENSE: ['prettier --write'],
  'package.json': ['prettier --write', 'npm run format:package'],
};
