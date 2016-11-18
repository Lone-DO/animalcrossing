App = Ember.Application.create();

App.Router.map(function() {
	// put your routes here
	this.resource('app', function() {
		this.resource('guide');
		this.resource('clock');
	});//default
	
	this.resource('gen', function() {
  		this.route('create');
	});
});

App.IndexRoute = Ember.Route.extend({
//	renderTemplate: function() {
//    var controller = this.controllerFor('app');
//
//    // Render the `favoritePost` template into
//    // the outlet `posts`, and use the `favoritePost`
//    // controller.
//    this.render('app', {
//      outlet: 'app',
//      controller: controller
//    });
//  }
});

App.IndexController = Ember.ObjectController.extend({

});