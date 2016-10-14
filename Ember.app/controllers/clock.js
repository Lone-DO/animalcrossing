//Acclock.Clock = Ember.View.extend({}); 

$(function () {
    'use strict';
    console.log("Function is running");
    var refresh = 1000, //1 sec interval. multiply by desired seconds.
        lastHr = -1,
        lastMin = -1,
        lastSec = -1;
    
    setInterval(function () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
           
        
        var img = document.getElementById('clockPhase'),
			source = "../assets/img/Timeline/",
            tag = "";
        
        if (hours < 10) {hours = "0" + hours; }
        if (minutes < 10) {minutes = "0" + minutes; }
        if (seconds < 10) {seconds = "0" + seconds; }
        

        //Updating Seconds
        if (seconds !== lastSec) {
            console.log(seconds + " seconds");
            if (seconds === 10) {
                console.log("10 Seconds after minute");
            }
            lastSec = seconds;
        }//End Sec refresh
        
        //Updating Minutes
        if (minutes !== lastMin) {
            console.log(minutes + " minutes");
            if (minutes === 10) {
                console.log("10 minutes after the hour");
            }
            
            if (minutes < 10) {
                tag = source + "(0";
				tag += minutes;
				tag += "00).png";
				console.log(tag);
            }
            if (minutes > 9) {
                tag = source + "(";
				tag += minutes;
				tag += "00).png";
				console.log(tag);
            }//end hour refresh
            
            lastMin = minutes;
        }//End of Min refresh
        
        //Updating Hours
        if (hours !== lastHr) {
            console.log(hours + " hours");
            if (hours === 10) {
                console.log("Change image to 10");
            }
              
            if (hours < 10) {
                tag = source + "(0";
				tag += hours;
				tag += "00).png";
				img.src = tag;
            }
            if (hours > 9) {
                tag = source + "(";
				tag += hours;
				tag += "00).png";
				img.src = tag;
            }//end hour refresh
            
            lastHr = hours;
        }
        var currentTime = hours + ":" + minutes + ":" + seconds;
        $(".clock i").text(currentTime);
    }, 1000);
    
    
	
	//timeClock refreshes time every second...
//	setInterval(function (timeClock) {
//		var date = new Date(),
//			hour = date.getHours(),
//			minutes = date.getMinutes(),
//			seconds = date.getSeconds();
//			if(hour < 10) {hour = "0" + hour};
//			if(minutes < 10) {minutes = "0" + minutes};
//			if(seconds < 10) {seconds = "0" + seconds};
//			var currentTime = hour + ":" + minutes + ":" + seconds;
//		$(".clock i").text(currentTime);
//	}, refresh);


//	$(function start(timeClock) {
//		var date = new Date(),
//			hours = date.getHours(),
//			minutes = date.getMinutes(),
//			seconds = date.getSeconds(),
//			update = setTimeout(start, refresh);
//		if (hours < 10) {hours = "0" + hours; }
//		if (minutes < 10) {minutes = "0" + minutes; }
//		if (seconds < 10) {seconds = "0" + seconds; }
//		var currentTime = hours + ":" + minutes + ":" + seconds;
//		$(".clock i").text(currentTime);
//	});

	
//	//timePhase refreshes clock phase each hour
//	setInterval(function (timePhase) {
//		var img = document.getElementById('clockPhase'),
//			hours = new Date().getHours(),
//			source = "../assets/img/Timeline/";
//
//		if (hours < 10) {
//			var i = source + "(0";
//			i += hours;
//			i += "00).png";
//			img.src = i;
//		}
//		if (hours > 9) {
//			var i = source + "(";
//			i += hours;
//			i += "00).png";
//			img.src = i;
//		}
//	}, refresh * 10);
    
    

//	setInterval(function (songPhase) {
//		var iframe = document.getElementById('songPhase'),
//			hour = new Date().getHours(),
//			html = "http://www.youtube.com/embed/",
//			songID = "0vrwZlwSpg0",
//			autoplay = "?autoplay=1";
//		
//		function() {
//			var i = html;
//			i += songID;
//			i += autoplay;
//			iframe.src = i;
//			console.log = i;
//		}
//	}, refresh * 10);





}); //End of Strict Script