// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  preset: '@testing-library/react-native',
  transform: {
    '^.+\\.jsx$': [
      'babel-jest',
      {configFile: path.resolve(__dirname, './babel.config.js')},
    ],
    '^.+\\.mjs$': [
      'babel-jest',
      {configFile: path.resolve(__dirname, './babel.config.js')},
    ],
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: path.resolve(__dirname, './babel.config.js'),
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(.*)?|@react-navigation|@react-native(-community)?|@constituentvoice|axios|styled-components|@fortawesome|@lit-labs|superjson|uuid|supercluster|kdbush|victory-native|victory-.*|@shopify/react-native-skia)/|@aws-amplify/*)',
  ],
  globals: {
    __DEV__: true,
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.maestro/',
    '@react-native',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
};
