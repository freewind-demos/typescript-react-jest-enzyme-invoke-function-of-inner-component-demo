module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js',
    './setupEnzyme.js'
  ],
};
