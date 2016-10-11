$(function () {
	'use strict';
	var refresh = 1000;
	
	setInterval(function (timeClock) {
		var date = new Date(),
			hour = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			currentTime = hour.toString() + ":" + minutes.toString() + ":" + seconds.toString();
		$(".clock i").text(currentTime);
	}, refresh);
	
	setInterval(function (timePhase) {
		var img = document.getElementById('clockPhase'),
			hour = new Date().getHours(),
			source = "../assets/img/Timeline/";
		console.log(img.src);
		
		if (hour < 10) {
			var i = source + "(0";
			i += hour;
			i += "00).png";
			img.src = i;
		}
		if (hour > 9) {
			var i = source + "(";
			i += hour;
			i += "00).png";
			img.src = i;
		}
	}, refresh * 10);
});