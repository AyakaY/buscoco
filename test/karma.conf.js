// Karma configuration
// Generated on Mon Apr 20 2015 20:03:02 GMT+0900 (JST)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha','chai','sinon'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-new-router/dist/router.es5.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      // injector:js
      'app/components/about/about.js',
      'app/components/bushere/bushere.js',
      'app/components/busstationselect/busstationselect.js',
      'app/components/contact/contact.js',
      'app/components/home/home.js',
      'app/scripts/config.js',
      'app/service/getbusstation/getbusstation.js',
      'app/service/getdestination/getdestination.js',
      'app/service/getroute/getroute.js',
      'app/service/gruntfiles/gruntfiles.js',
      'test/components/about/about.spec.js',
      'test/components/bushere/bushere.spec.js',
      'test/components/busstationselect/busstationselect.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/home/home.spec.js',
      'test/main.spec.js',
      'test/service/getbusstation/getbusstation.mock.js',
      'test/service/getbusstation/getbusstation.spec.js',
      'test/service/getdestination/getdestination.mock.js',
      'test/service/getdestination/getdestination.spec.js',
      'test/service/getroute/getroute.mock.js',
      'test/service/getroute/getroute.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      // endinjector
      'app/scripts/main.js',
      'test/main.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'report',
      subdir: 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
