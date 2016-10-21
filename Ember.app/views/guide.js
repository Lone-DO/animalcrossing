Acclock.Guide = Ember.View.extend({
	didInsertElement : function () {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function () {
			// perform your jQuery logic here
			console.log("Guide has loaded");
			
		});
	}
});