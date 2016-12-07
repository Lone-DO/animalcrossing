import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var url = '/api/albums';
		return Ember.$.getJSON(url).then(function(data) {
			return data;
		});
	}
});
