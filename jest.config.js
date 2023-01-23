// Enable full object reporting in console.log
import { inspect } from 'util'

inspect.defaultOptions.depth = null

/** @type {import('@jest/types').Config.InitialOptions.CoverageThresholdValue} */
const fullCoverage = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
}

const esBuildConfig = {
  sourcemap: true,
  platform: 'node',
  external: ['/node_modules/*'],
  loader: 'ts',
}

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest/presets/default-esm',
  cacheDirectory: '.jest-cache',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules/', 'test/', 'generated/'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover'],
  coverageThreshold: {
    './src/*.ts': fullCoverage,
    global: fullCoverage,
  },
  moduleNameMapper: {
    '@root/(.*)$': '<rootDir>/$1',
    '@test/(.*)$': '<rootDir>/test/$1',
    '@test': '<rootDir>/test/index.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/generated/',
  ],
  testTimeout: 60000,
  transform: {
    '\\.ts$': [
      'ts-jest',
      {
        babelConfig: true,
        tsconfig: true,
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/', '/generated/'],
}

export default config
