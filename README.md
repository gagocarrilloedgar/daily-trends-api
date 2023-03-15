# news-feed-api

API build with Node-TS following, DDD Hexagonal Architecture and OOP best practices.

## Features

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Codely's config](https://github.com/lydell/eslint-plugin-simple-import-sort/) (includes ESLint's recommended rules, Prettier, Import plugin and more)
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Supertest]()

## Working with this project

- Run the app: `yarn dev`
- Install the dependencies: `yarn install`
- Execute unit tests: `yarn test:unit`
- Execture integration tests: `yarn test:int`
- Check linter errors: `npm run lint`
- Fix linter errors: `npm run lint:fix`
