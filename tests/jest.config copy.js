const config = {
  rootDir: '..',
  testMatch: [
    '<rootDir>/spec/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).js?(x)',
    '<rootDir>/src/**/?(*-)+(spec|test).js?(x)',
  ],
  testPathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  }
};

module.exports = config;
