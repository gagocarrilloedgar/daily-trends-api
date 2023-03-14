module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/tests/**/*.spec.(ts|js)'],
  testEnvironment: 'node'
}
