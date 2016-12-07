import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    // put your routes here
    this.route('app', function() {
        this.route('guide');
        this.route('clock');
    });//default
    
    this.route('gen', function() {
        this.route('create');
    });
});

export default Router;