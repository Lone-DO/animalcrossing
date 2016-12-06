import Ember from 'ember';

export default Ember.Controller.extend({
	 actions: {
        showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        }
	 }
});
