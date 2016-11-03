'use strict';

var mongoose = require('mongoose');

//gen.title
//gen.releaseDate
//gen.labelName
//gen.platform
//gen.imageUrl
//gen.hourIDs

var genAlbum = new mongoose.Album({
   labelName: String,
   relaseDate: String,
   platform: String,
   imageUrl: String,
   hourIDS: Array
});

var model = mongoose.model('Gen', genAlbum);

module.exports = model;