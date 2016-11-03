'use strict';
Acclock.AppController = Ember.Controller.extend({
    actions: {
        isStarted: false,
        hintShowing: false,
        start: function () {
            this.set('isStarted', true);
            require('../phase.js');
//            $.getScript("../phase.js");
//            $('.appNav a').html('Exit');
        },
        end: function () {
            this.set('isStarted', false);
//            $('.appNav a').html('Start');
        }
    }
});