var albums = require('../api/album');
 module.exports = function(router) {
       
    router.route('/albums').post(function(req, res) {
		console.log(req.body); albums.addAlbum(req,res);
	}).get(function(req,res) { albums.getAllAlbums(req,res) });

    router.route('*').get(function(req, res) {
		res.sendfile('../app/index.html'); // load our public/index.html file
    });
};