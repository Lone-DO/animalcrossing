App = Ember.Application.create();

App.Router.map(function() {
	// put your routes here
	this.resource('app');//default
	this.resource('guide');
	this.resource('clock');
	this.resource('gen', function() {
  		this.route('create');
	});
});

App.IndexRoute = Ember.Route.extend({

});

App.IndexController = Ember.ObjectController.extend({

});