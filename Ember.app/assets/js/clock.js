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
	
	setInterval(function () {
		var img = document.getElementById('clockPhase'),
			hour = new Date().getHours();
		console.log(img.src);

		if (hour === 0) {
			img.src = "../assets/img/Timeline/(0000).png";
		}
		if (hour === 1) {
			img.src = "../assets/img/Timeline/(0100).png";
		}
		if (hour === 2) {
			img.src = "../assets/img/Timeline/(0200).png";
		}
		if (hour === 3) {
			img.src = "../assets/img/Timeline/(0300).png";
		}
		if (hour === 4) {
			img.src = "../assets/img/Timeline/(0400).png";
		}
		if (hour === 5) {
			img.src = "../assets/img/Timeline/(0500).png";
		}
		if (hour === 6) {
			img.src = "../assets/img/Timeline/(0600).png";
		}
		if (hour === 7) {
			img.src = "../assets/img/Timeline/(0700).png";
		}
		if (hour === 8) {
			img.src = "../assets/img/Timeline/(0800).png";
		}
		if (hour === 9) {
			img.src = "../assets/img/Timeline/(0900).png";
		}
		if (hour === 10) {
			img.src = "../assets/img/Timeline/(1000).png";
		}
		if (hour === 11) {
			img.src = "../assets/img/Timeline/(1100).png";
		}
		if (hour === 12) {
			img.src = "../assets/img/Timeline/(1200).png";
		}
		if (hour === 13) {
			img.src = "../assets/img/Timeline/(1300).png";
		}
		if (hour === 14) {
			img.src = "../assets/img/Timeline/(1400).png";
		}
		if (hour === 15) {
			img.src = "../assets/img/Timeline/(1500).png";
		}
		if (hour === 16) {
			img.src = "../assets/img/Timeline/(1600).png";
		}
		if (hour === 17) {
			img.src = "../assets/img/Timeline/(1700).png";
		}
		if (hour === 18) {
			img.src = "../assets/img/Timeline/(1800).png";
		}
		if (hour === 19) {
			img.src = "../assets/img/Timeline/(1900).png";
		}
		if (hour === 20) {
			img.src = "../assets/img/Timeline/(2000).png";
		}
		if (hour === 21) {
			img.src = "../assets/img/Timeline/(2100).png";
		}
		if (hour === 22) {
			img.src = "../assets/img/Timeline/(2200).png";
		}
		if (hour === 23) {
			img.src = "../assets/img/Timeline/(2300).png";
		}
	}, 60000);
});
