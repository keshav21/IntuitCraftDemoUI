module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.css$': '<rootDir>/__mocks__/styleMock.js',
      '\\.png$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['/Users/keshav/intuit/intuitfrontend/src/setupTests.js'],
  };