// Karma configuration
// Generated on Thu Apr 19 2018 11:02:25 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: './dev',
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    frameworks: ['jasmine'],
    files: [
      '**/*.js',
      '**/*.spec.js'
    ],
    exclude: [
      'node_modules/**/*.spec.js'
    ],
    preprocessors: {
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
