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
            iframe = document.getElementById('songPhase'),
			source = "../assets/img/Timeline/",
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
        
        
        if (hours < 10) {hours = "0" + hours; }
        if (minutes < 10) {minutes = "0" + minutes; }
        if (seconds < 10) {seconds = "0" + seconds; }
        
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
                    iframe.src = vidTag;
                } else {
                    vidTag = vSource;
                    vidTag += oSongsID[hours];
                    vidTag += autoplay;
                    vidTag += extend + oSongsID[hours];
                    iframe.src = vidTag;
                }
            });
            lastHr = hours;
        }//end hour refresh
		
		$(function tickTock() { //Beta for Template
			var sdegree = seconds * 6,
				srotate = "rotate(" + sdegree + "deg)",
				hdegree = hours * 30 + (minutes / 2),
				hrotate = "rotate(" + hdegree + "deg)",
				mdegree = minutes * 6,
				mrotate = "rotate(" + mdegree + "deg)";
				
			$("#sec").css({ "transform": srotate });
			$("#hour").css({ "transform": hrotate});
			$("#min").css({ "transform" : mrotate });
				
		});
		
//        console.log(iframe.src);
        console.log("Refresh");
    }, 1000);
}); //End of Strict Script