import Application from '@ember/application';
<<<<<<< HEAD
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'super-rentals/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
=======
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
