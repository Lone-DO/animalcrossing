module.exports = {
	GenAlbum: function (albumID, labelName, releaseDate, platform, imageURL) {
		this.albumID = albumID;
		this.labelName = labelName;
		this.releaseDate = releaseDate;
		this.platform = platform;
		this.imageURL = imageURL;
		this.postTime = new Date();
	}
};