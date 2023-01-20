<<<<<<< HEAD
import Application from 'super-rentals/app';
import config from 'super-rentals/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
=======
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

<<<<<<< HEAD
setup(QUnit.assert);

=======
>>>>>>> 4b75937 (Initial Commit from Ember CLI v3.3.0)
start();
