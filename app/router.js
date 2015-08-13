import Ember from 'ember';
import config from './config/environment';

// ember is creating a new router

var Router = Ember.Router.extend({
  location: config.locationType
});

// router.map adds new routes to your application
// we added 'this.route('create');

Router.map(function() {
  this.route('create');
});

export default Router;
