/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
	'use strict';
	var globSync = require('glob').sync;
	var mocks	= globSync('./mocks/**/*.js',
		{ cwd: __dirname }).map(require);
	var proxies    = globSync('./proxies/**/*.js',
		{ cwd: __dirname }).map(require);

	//Log proxy requests
	var morgan  = require('morgan');
	app.use(morgan('dev'));

	mocks.forEach(function(route) { route(app); });
	proxies.forEach(function(route) { route(app); });


	// /*Setting Up Via Mongoose Alternative*/
	// var express = require('express');
	// var app = express();
	// var bodyParser = require('body-parser');

	// //Port
	// var port = process.env.PORT || 3000;

	// //Mongoose
	// var mongoose = require('mongoose');
	// mongoose.connect('mongodb://localhost/RESTServer');

	// //Static Ember Dir
	// app.use(express.static(__dirname + '/app'));
	// app.use(bodyParser.urlencoded({ extended: true }));  
	// app.use(bodyParser.json());  

	// //Routes API
	// var router = express.Router();  
	// app.use('/', router);  
	// require('./routes/router')(router); // configure our routes

	// // startup our app at http://localhost:3000
	// app.listen(port);

	// // expose app
	// exports = module.exports = app;

	/*** Transfer from Server.js ***/
	var express = require('express');
	var app = express();
	var http = require('http');
	var server = http.createServer(app);
	var bodyParser = require('body-parser');

	app.use(express.static(__dirname + '/src'));
	app.use(bodyParser());

	global.config = require('./config');
	global.constants = require('./constants');


	//connect to mongodb
	console.log('INFO: Connecting to MongoDB...');
	console.log('\tURL: ' + global.config.MONGO_URL);
	console.log('\tCollections:' + JSON.stringify(global.constants.MONGO_COLLECTIONS));
	global.db = require('mongojs').connect(global.config.MONGO_URL, global.constants.MONGO_COLLECTIONS);

	//routes
	require('./routes/api')(app);
	process.on('exit', function() {
	  console.log('App is exiting.');
	});

// 	//listen for requests
	server.listen(global.config.APP_PORT);
// 	console.log('Animal Crossing Project');
// 	console.log('App started on port ' + global.config.APP_PORT);
};