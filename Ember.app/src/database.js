'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ac-clock', function (err) {
   if (err) {
      console.log('failed connecting to Mongodb!');
   } else {
      console.log('Succesful connecting to Mongo!');
   }
});