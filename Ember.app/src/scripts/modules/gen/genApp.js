App.GenIndexRoute = Ember.Route.extend({
	model: function() {
    var url = '/api/albums';
	return Ember.$.getJSON(url).then(function(data) {
		return data;
	});
  }
});


App.GenCreateController = Ember.ObjectController.extend({
	labelName: '',
	releaseDate: '',
	platform: '',
	imageURL: '',
	hourID: ["bla","bla","","","","","","","","","","","","","","","","","","","","","",""],
	saveButtonText: 'Save',

	clearFields: function() {
		this.set('labelName', '');
		this.set('releaseDate', '');
		this.set('platform', '');
		this.set('imageURL', '');
		this.set('hourID', ["","","","","","","","","","","","","","","","","","","","","","","",""]);
	},

	actions: {
		saveAlbum: function() {
			var albumData = {
				labelName: this.get('labelName'),
				releaseDate: this.get('releaseDate'),
				platform: this.get('platform'),
				imageURL: this.get('imageURL'),
				hourID: this.get('hourID')
			},
				 url = '/api/albums',
				 that = this;
			this.set('saveButtonText', 'Saving...');
			Ember.$.post(url, albumData).then(function(saveResult) {
				if(saveResult.status === 'OK') {
					that.clearFields();
					that.transitionToRoute('gen');
				} else {
					that.set('saveButtonText', 'Couldn\'t save. Try again?');
				}
			});
		}
	}
});