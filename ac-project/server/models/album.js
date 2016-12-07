var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
	labelName: String,
	releaseDate: String,
	platform: String,
	imageURL: String,
	hourID: Array
});

module.exports = mongoose.model('Album', AlbumSchema);