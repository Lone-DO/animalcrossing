'use strict';
Acclock.ApplicationController = Ember.Controller.extend({
    actions: {
        showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        }
    }
});