//server.js

//modules
var express = require('express');
var app = express();

//Port
var port = process.env.PORT || 3000;

//Static files
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); //Route Config

// App server Launch (http://localhost:"port")
app.listen(port);
console.log("Server is running, localhost:3000");