'use strict';

var express = require('express');
var router = require('./api');
var app = express();
var parser = require('body-parser');

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function () {
   console.log('App is running');
});