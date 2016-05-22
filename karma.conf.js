// Karma configuration
// Generated on Thu Apr 21 2016 21:23:38 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests/*-tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*/**.js': ['webpack', 'sourcemap'],
      'tests/*-tests.js': ['webpack', 'sourcemap']
    },
    webpack:{
      module: {
        loaders: [{
          test: /\.js?$/, // A regexp to test the require path. accepts either js or jsx
          exclude: /node_modules/,
          loader: ['babel'], // The module to load. "babel" is short for "babel-loader"
          query: {
            presets: ['es2015']
          }
        },

          {
            // When you encounter SCSS files, parse them with node-sass,
            // then return the results as a string of CSS
            test: /\.scss/,
            loader: 'style!css!sass',
            loaders: ['style', 'css', 'sass'],
          },
          { test: /\.png$/, loader: "url-loader?limit=100000" }

        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Safari', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
