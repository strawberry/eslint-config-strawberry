# @strawberrydigital/eslint-config

This package provides Strawberry's .eslintrc as a shared npm module. It extends and tweaks [airbnb's shared config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base). This package will also configure and run Prettier if it is installed on a project.

## Installation
Install with yarn:
```shell
$ yarn add --dev eslint prettier @strawberrydigital/eslint-config
```

or install with npm:
```shell
$ npm install --save-dev eslint prettier @strawberrydigital/eslint-config
```

## Usage
Add the preset to your eslint config file (`.eslintrc`, `.eslintrc.js`, etc.):
```json
{
    "extends": ["@strawberrydigital/eslint-config"]
}
```

Add your `.prettierrc` config (take the one from this repo if you like):
```json
{
    "arrowParens": "avoid",
    "singleQuote": true,
    "tabWidth": 4
}
```

Add a linting script to your `package.json`:
```json
{
    "scripts": {
        "lint:scripts": "eslint --ext .js,.vue ."
    }
}
```
