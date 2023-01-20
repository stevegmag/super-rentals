<<<<<<< HEAD
'use strict';

module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_start_timeout: 120,
=======
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--headless',
<<<<<<< HEAD
=======
        '--disable-gpu',
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
<<<<<<< HEAD
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
=======
        '--window-size=1440,900'
      ].filter(Boolean)
    }
  }
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
};
