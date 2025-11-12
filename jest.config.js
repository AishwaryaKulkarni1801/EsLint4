module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  
  // Test patterns
  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ],
  
  // Coverage configuration
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/**/*.d.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.module.ts',
    '!src/environments/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary', 'lcov', 'json-summary'],

  // Ensure CI doesn't fail on current coverage by setting thresholds
  // Set thresholds at or below current project coverage. Adjust upward when you add tests.
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 100,
      functions: 50,
      lines: 42
    }
  },
  
  // Jest configuration
  clearMocks: true,
  restoreMocks: true,
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/e2e/'
  ],
  
  // Transformations to ignore
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@angular|@ngrx|ngx-)',
  ],
  
  // Test timeout
  testTimeout: 10000,
  
  // Reporter configuration
  reporters: [
    'default'
  ]
};