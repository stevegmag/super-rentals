'use strict';

<<<<<<< HEAD
module.exports = function (environment) {
=======
module.exports = function(environment) {
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
<<<<<<< HEAD
    locationType: 'history',
    EmberENV: {
      RAISE_ON_DEPRECATION: true,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
=======
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

<<<<<<< HEAD
  ENV.MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

=======
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
  return ENV;
};
