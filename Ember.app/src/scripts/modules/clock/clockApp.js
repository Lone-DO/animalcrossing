/*global $:false, jQuery:false */
'use strict';

var currentUrl = window.location.href;
if (currentUrl.indexOf("/#/") > -1) {
	currentUrl = currentUrl.slice(0, -2);
}
//Ember Controller Module, Where all the main scripts are.
App.AppController = Ember.Controller.extend({
	actions: {
		isStarted: false, //defaults app to not started
		hintShowing: false, //defaults guide to not show
	//Onclick of Launch img, Fire application
		start: function () {
			this.set('isStarted', true);
			console.log('App Launched');
			$(function phases() {
				var lastHr = -1,
					 lastMin = -1,
					 lastSec = -1;
				
			//*** Setting up API ***
				$(function () {
				// Authenticate via API Key
					var albumAPI = (currentUrl + 'api/albums');
					console.log('Api location is ' + albumAPI);
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
									Generation = '<ul><li>';
								
							//Api loop Head/ Opening
								Generation += '<button class="set' + i + '">';
								Generation += 'Play This' + '</button>';
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
								 /**CityFolk**/
							var _cfID = albums[0].hourID,
								 /**NewLeaf**/
								 _nlID = albums[1].hourID,
								 /**Original/Gamecube**/
								 _oID = albums[2].hourID,
								 /**Defaults Original playlist**/
								 _currentGen = _oID, 
								 /**Dev var for verifying generation has changed**/
								 lastGen = '', 
								 img = document.getElementById('clockPhase'),
								 iframe = document.getElementById('songPhase'),
								 source = "../../../assets/img/Timeline/",
								 vSource = "http://www.youtube.com/embed/",
								 imgTag = "", //Tag for img by hour
								 currentTime = "",
								 autoplay = "?autoplay=1",
								 extend = "&loop=1&playlist=";
							
							setInterval(function () {
								var date = new Date(),
									 hours = date.getHours(),
									 minutes = date.getMinutes(),
									 seconds = date.getSeconds(),
									 vidTagAm = "", //Tag for vid by hour
									 vidTagPm = "", //Tag for vid by hour
									 tagHrs = ""; //Tracks hour and selects array
									 
							//Adds 0 on front to avoid single digit time
								if (hours < 10) {hours = "0" + hours; }
								if (minutes < 10) {minutes = "0" + minutes; }
								if (seconds < 10) {seconds = "0" + seconds; }
								
								var play = function () {
									if (hours < 10) {
										tagHrs = hours.slice(1);
										vidTagAm = vSource;
										vidTagAm += _currentGen[tagHrs];
										vidTagAm += autoplay;
										vidTagAm += extend + _currentGen[tagHrs];
										iframe.src = vidTagAm;
									} else {
										vidTagPm = vSource;
										vidTagPm += _currentGen[hours];
										vidTagPm += autoplay;
										vidTagPm += extend + _currentGen[hours];
										iframe.src = vidTagPm;
									}
								};
								
							//Concatinates time Data & Displays
								currentTime = hours + ":" + minutes + ":" + seconds;
								$(".clock i").text(currentTime);
								/**Plays NewLeaf**/
								$('.set0').click(function (){
									lastGen = _currentGen;
									_currentGen = _nlID;
									play();
								});
								/**Plays CityFolk**/
								$('.set1').click(function (){
									lastGen = _currentGen;
									_currentGen = _cfID;
									play();
								});
								/**Plays Original**/
								$('.set2').click(function (){
									lastGen = _currentGen;
									_currentGen = _oID;
									play();
								});

							//Updating Seconds
								if (seconds !== lastSec) {
									lastSec = seconds;
								}//End Sec refresh

							//Updating Minutes
								if (minutes !== lastMin) {
									lastMin = minutes;
								}//End of Min refresh
								
							//Updating Hours
								if (hours !== lastHr) {
								//Auto Swaps clock shift on hour change
									$(function clockPhase() {
										imgTag = source + "(";
										imgTag += hours;
										imgTag += "00).png";
										img.src = imgTag;
									});
								//Autoplays song on hour change
									$(function songPhase() {
										play();
									});
									lastHr = hours;
								}//end hour refresh
							}, 1000);
						}//End Api.Success
					});//End Api
				});
			// *****API Rendering*****
			}); //End of Strict Script
		},
		end: function () {
            this.set('isStarted', false);
        }
    }
});