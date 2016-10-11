$(function () {
	'use strict';
	setInterval(function () {
		var date = new Date(),
			hour = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			currentTime = hour.toString() + ":" + minutes.toString() + ":" + seconds.toString();
		$(".clock i").text(currentTime);
	}, 1000);

//	if (hour === 4) {
//		console.log("its 2am");
//	} else {
//		console.log("Its not 3am");
//	}
	
});
