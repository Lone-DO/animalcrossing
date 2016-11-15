'use strict';

var currentUrl = window.location.href;
if (currentUrl.indexOf("/#/") > -1) {
	currentUrl = currentUrl.slice(0, -2);
}

App.AppController = Ember.Controller.extend({
    actions: {
        isStarted: false,
        hintShowing: false,
        start: function () {
            this.set('isStarted', true);
            
			console.log('Phase Loaded');
			$(function phases() {
				console.log("Function is running");
				var lastHr = -1,
					lastMin = -1,
					lastSec = -1;
				
			//*** Setting up API ***
				$(function OST() {
				// Authenticate via API Key
					var albumAPI = (currentUrl + 'api/albums');
					console.log('the Api is location is ' + albumAPI);
				//API Launch
					$.ajax({
					  url: albumAPI,
					  dataType: 'json',
					  success: function (data) {
						var albums = data.albums;
						$.each(albums, function (i) {
						//Api data storing
							var _name = albums[i].labelName,
								_release = albums[i].releaseDate,
								_platform = albums[i].platform,
								_img = albums[i].imageURL,
								_imgOver = albums[i].imageHover,
								_imgOut = albums[i].imageOut,
								_hour = albums[i].hourID,
								Generation = '<ul><li>';
						//Api loop Head/ Opening
							Generation += '<article><a>';
							Generation += '<dd class="title">' + _name + '</dd>';
							Generation += '<dd class="data">' + _release + '</dd>';
							Generation += '<dd class="platform">' + _platform + '</dd>';
						//Api loop for img data
							Generation += '<a href="' + _img + '">';
							Generation += '<img src="' + _imgOut + '" ';
							Generation += 'onmouseover="this.src=' + "'" + _imgOver + "';" + '" ';
							Generation += 'onmouseout="this.src=' + "'" + _imgOut + "';" + '" ';
							Generation += '></a>';

							Generation +=  '<ol class="GenList"></ol>';
						//Api loop closing
							Generation += '</a></article>';
							Generation += '</li></ul>';
						//Posting Api data
							$('.generation').append(Generation);

						/**** Api hourID listing
							var _GenList = $.each(_hour, function (i) {
								var id = _hour[i],
								_list = '<li>' + id + '</li>';
								$('.GenList').append(_list);
							}); ****/

						});
						  var _oID = albums[0].hourID,
							  _cfID = albums[1].hourID,
							  _nlID = albums[2].hourID;
						  console.error("api loaded");

					  }//End of Api Success
					});//End Api
				});
			// *****API Rendering*****
				
				setInterval(function () {
					var date = new Date(),
						hours = date.getHours(),
						minutes = date.getMinutes(),
						seconds = date.getSeconds();

					var img = document.getElementById('clockPhase'),
						iframe = document.getElementById('songPhase'),
						source = "../../../assets/img/Timeline/",
						vSource = "http://www.youtube.com/embed/",
						imgTag = "", //Tag for img by hour
						vidTag = "", //Tag for vid by hour
						tagHrs = "", //Tracks hour and selects array

						//Array of Generation Playlist
						oSongsID = [
							"As6_i8RoKP0", //12am
							"8qnkNjDAd4k",//1am
							"QdrjrVPAMvQ",//2am
							"nOROAUpqrGU",//3am
							"xTXgAy1TJt8",//4am
							"nXRK1OmRUq4",//5am
							"voceB48hemo",//6am
							"l5285eKta-c",//7am
							"w0uOCxFYq2U",//8am
							"wxd56GLRxa0",//9am
							"Wdvh7PLW0G0",//10am
							"X0FFrjTeWr0",//11am
							"_1YpXECC7MY",//12pm
							"OvhAeNNG-RQ",//1pm
							"uuduck3SJo8",//2pm
							"aGUzuX6cJvc",//3pm
							"uOsads28JTg",//4pm
							"Wqu5UfBFUW8",//5pm
							"FtPwnwHmS9I",//6pm
							"6c7Kgf0d2qk",//7pm
							"NOA89fdYmqw",//8pm
							"RKPjKC8bs14",//9pm
							"KYjFqcTNzM0",//10pm
							"qw8FTCaAFSM" //11pm
						],
						autoplay = "?autoplay=1",
						extend = "&loop=1&playlist=";

					//Adds 0 on front to avoid single digit time
					if (hours < 10) {hours = "0" + hours; }
					if (minutes < 10) {minutes = "0" + minutes; }
					if (seconds < 10) {seconds = "0" + seconds; }

					//Concatinates time Data & Displays
					var currentTime = hours + ":" + minutes + ":" + seconds;
					$(".clock i").text(currentTime);

					//Updating Seconds
					if (seconds !== lastSec) {
			//            console.log(seconds + " seconds");
						lastSec = seconds;
					}//End Sec refresh

					//Updating Minutes
					if (minutes !== lastMin) {
			//            console.log(minutes + " minutes");
						lastMin = minutes;
					}//End of Min refresh

					//Updating Hours
					if (hours !== lastHr) {
			//            console.log(hours + " hours");

						$(function clockPhase() {
							imgTag = source + "(";
							imgTag += hours;
							imgTag += "00).png";
							img.src = imgTag;
						});

						$(function songPhase() {
							if (hours < 10) {
								tagHrs = hours.slice(1);
								vidTag = vSource;
								vidTag += oSongsID[tagHrs];
								vidTag += autoplay;
								vidTag += extend + oSongsID[tagHrs];
							} else {
								vidTag = vSource;
								vidTag += oSongsID[hours];
								vidTag += autoplay;
								vidTag += extend + oSongsID[hours];
							}
							iframe.src = vidTag;
						});
						lastHr = hours;
					}//end hour refresh
			//        console.log("Refresh");
				}, 1000);
				console.log('function has ended');
			}); //End of Strict Script
        },
        end: function () {
            this.set('isStarted', false);
        }
    }
});