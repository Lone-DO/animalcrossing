var Album = require('../models/album');

module.exports.getAllAlbums = function (req, res) {
	Album.find(function(err, albums) {
		if (err) {
			res.send(err);
		}
		res.json({albums: albums});
	});
};

module.exports.addAlbum = function (req, res) {
	var album = new Album(res.body.quote);
	album.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({album: album});
	});
};