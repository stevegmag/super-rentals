'use strict';

const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
<<<<<<< HEAD
  'last 1 Safari versions',
];

module.exports = {
  browsers,
=======
  'last 1 Safari versions'
];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 11');
}

module.exports = {
  browsers
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
};
