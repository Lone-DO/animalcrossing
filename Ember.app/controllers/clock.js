Acclock.Clock = Ember.View.extend({
});

$(function () {
	'use strict';
	var refresh = 1000; //1 sec interval. multiply by desired seconds.
	
	//timeClock refreshes time every second...
	setInterval(function (timeClock) {
		var date = new Date(),
			hour = date.getHours().toString(),
			minutes = date.getMinutes().toString(),
			seconds = date.getSeconds().toString(),
			currentTime = hour + ":" + minutes + ":" + seconds;
		$(".clock i").text(currentTime);
		
	}, refresh);
	
	//timePhase refreshes clock phase each hour
	setInterval(function (timePhase) {
		var img = document.getElementById('clockPhase'),
			hour = new Date().getHours(),
			source = "../assets/img/Timeline/";
		
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
	
	
	
	
}); //End of Strict Script