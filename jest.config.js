module.exports = {
  collectCoverage: true,
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme',
  coveragePathIgnorePatterns: ['.eslintrc.js', 'jest.config.js', '\\.json$'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
