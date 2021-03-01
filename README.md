# eslint-config-airbnb-ts

[![Version](https://img.shields.io/npm/v/eslint-config-airbnb-ts.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-airbnb-ts?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/eslint-config-airbnb-ts.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-airbnb-ts) [![Last commit](https://img.shields.io/github/last-commit/nilzona/eslint-config-airbnb-ts.svg?style=flat-square)](https://github.com/nilzona/eslint-config-airbnb-ts/graphs/commit-activity) [![License](https://img.shields.io/github/license/nilzona/eslint-config-airbnb-ts.svg?style=flat-square)](https://github.com/nilzona/eslint-config-airbnb-ts/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/nilzona/eslint-config-airbnb-ts/blob/master/CONTRIBUTING.md) [![Code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/nilzona/eslint-config-airbnb-ts/blob/master/CODE_OF_CONDUCT.md)

Airbnb's ESLint config with TypeScript support

This started as a fork from https://github.com/iamturns/eslint-config-airbnb-ts
But is here modded to remove the eslint-config-airbnb as dependency.

If you're migrating from [eslint-config-airbnbn-typescript](https://github.com/iamturns/eslint-config-airbnb-ts) then checkout out the [migrating guide]('./MIGRATING.md)

## Setup

### 1) Install

#### typescript

if you don't have typescript installed, install it

```bash
npm install typescript
```

make sure you have a tsconfig.json that includes the files you want to lint or look further down if you want to create a separate tsconfig for defining which files to lint.

#### eslint-config-airbnb

If you want to lint React features then use together with `eslint-config-airbnb`. Before installing you'll need to install all peerDependencies `eslint-config-airbnb`

```bash
npx install-peerdeps --dev eslint-config-airbnb
npm install eslint-config-airbnb eslint-config-airbnb-ts --save-dev
```

#### eslint-config-airbnb-base

If you want to lint without React support then install together with `eslint-config-airbnb-base`. Before installing you'll need to install all peerDependencies `eslint-config-airbnb-base`.

```bash
npx install-peerdeps --dev eslint-config-airbnb-base
npm install eslint-config-airbnb-base eslint-config-airbnb-ts --save-dev
```

### 2) Configure ESLint

Add `"extends": ["airbnb", "airbnb-ts"]` to your ESLint config file.

If you don't need React support, add `"extends": ["airbnb-base", "airbnb-ts/base"]` instead.

An example `.eslintrc.js`:

```js
module.exports = {
  extends: ['airbnb', 'airbnb-ts'],
};
```

or for base

```js
module.exports = {
  extends: ['airbnb-base', 'airbnb-ts/base'],
};
```

Also note that we're enabling @typescript-eslint/eslint-plugin's recommended rules by default
You can turn them off if you want but since they're recommended they should probably be enabled.

### 4) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
 module.exports = {
   extends: ['airbnb', 'airbnb-ts'],
+  parserOptions: {
+    project: './tsconfig.json',
+ }
 };
```

### 4) Run ESLint

Open a terminal to the root of your project, and run the following command:

```bash
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## FAQ

### Does this work with JavaScript files too?

Yep! This config is just decorating `eslint-config-airbnb` or `eslint-config-airbnb-base` with TypeScript support.

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include.

A common fix is to create a `tsconfig.eslint.json` file, which extends your `tsconfig.json` file and includes all files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Update your ESLint config file:

```diff
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```

### I wish this config would support [...]

The goal of `eslint-config-airbnb-ts` is to simply decorate `eslint-config-airbnb` with TypeScript support. It's not a single config to cater for all TypeScript linting requirements. For additional functionality, alter your ESLint config file. For example:

```js
module.exports = {
  extends: [
    'airbnb',
    'airbnb-ts',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
```

## Additional Documentation

- [CHANGELOG.md](CHANGELOG.md)
- [DEVELOPING.md](DEVELOPING.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [MAINTAINING.md](MAINTAINING.md)

## Credits

Authored by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

Maintained by Anders Nilsson (nilssonanders79@gmail.com)

A big thank you to all [contributors](https://github.com/nilzona/eslint-config-airbnb-ts/graphs/contributors)!

## License

Open source [licensed as MIT](https://github.com/nilzona/eslint-config-airbnb-ts/blob/master/LICENSE).
