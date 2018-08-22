import Route from '@ember/routing/route';
<<<<<<< HEAD
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('rental');
  }
}
=======

export default Route.extend({
});
>>>>>>> 4b6f375 (adding index route)
