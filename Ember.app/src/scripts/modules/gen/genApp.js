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
	saveButtonText: 'Save',

	clearFields: function() {
		this.set('labelName', '');
		this.set('releaseDate', '');
		this.set('platform', '');
		this.set('imageURL', '');
	},

	actions: {
		saveAlbum: function() {
			var albumData = {
				labelName: this.get('labelName'),
				releaseDate: this.get('releaseDate'),
				platform: this.get('platform'),
				imageURL: this.get('imageURL')
			};

			var url = '/api/albums';
			this.set('saveButtonText', 'Saving...');
			var that = this;
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