module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts'],
  clearMocks: true,
};
