/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */

 // Enable full object reporting in console.log
 const util = require('util')
 util.inspect.defaultOptions.depth = null
 
 const fullCoverage = {
   branches: 100,
   functions: 100,
   lines: 100,
   statements: 100,
 }
 
 module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   testMatch: [
     '**/test/**/*.ts?(x)',
     '**/?(*.)+(spec|test).ts?(x)',
   ],
   testPathIgnorePatterns: [
     '<rootDir>/node_modules/',
     '<rootDir>/dist/',
   ],
   transform: {
     '\\.ts$': 'ts-jest',
   },
   transformIgnorePatterns: [
     '/node_modules/'
   ],
   cacheDirectory: '.jest-cache',
   collectCoverage: true,
   coveragePathIgnorePatterns: [
     '/node_modules/',
   ],
   coverageReporters: ['json', 'lcov', 'text', "text-summary", 'clover'],
   coverageThreshold: {
     global: {
       branches: 100,
       functions: 100,
       lines: 100,
       statements: 100,
     },
     './src/*.ts': fullCoverage,
   },
   moduleNameMapper: {
     '^@/(.*)$': '<rootDir>/src/$1',
   },
   testTimeout: 60000, // Each test should finish in under a minute
   globals: {
     'ts-jest': {
       babelConfig: true,
       tsconfig: true,
     },
   },
 }
 