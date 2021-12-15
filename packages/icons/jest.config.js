module.exports = {
  cacheDirectory: 'build/.jest-cache',
  coverageDirectory: 'build/coverage',
  coveragePathIgnorePatterns: ['.data.tsx', '.stories.tsx', 'index.ts'],
  coverageReporters: ['html', 'text', 'json', 'cobertura', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: ['**/__tests__/*.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};
