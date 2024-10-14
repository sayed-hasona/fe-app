module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-jasmine'),
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-chrome-launcher'),
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-jasmine-html-reporter'),
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-coverage'),
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    coverageReporter: {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      dir: require('path').join(__dirname, './coverage/ms-client-app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    restartOnFileChange: true
  });
};
