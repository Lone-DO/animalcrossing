'use strict';

var mongoose = require('mongoose');

//gen.title
//gen.releaseDate
//gen.labelName
//gen.platform
//gen.imageUrl
//gen.hourIDs

var genAlbum = new mongoose.Album({
    name: String,
    relaseDate: String,
    labelName: String,
    platform: String,
    imageUrl: String,
    hourIDS: Array
});

var model = mongoose.model('Gen', genAlbum);

module.exports = model;