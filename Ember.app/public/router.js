Acclock.Router.map(function () {
   'use strict';
	this.resource('app', {path: '/'});//default
	this.resource('guide');
	this.resource('clock');
});