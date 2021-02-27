module.exports = {
  hooks: {
    'pre-commit': 'npm run pre-commit',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
