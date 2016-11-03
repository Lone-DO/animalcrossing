'use strict';

var Gen = require('./models/gen.js');

var gens = {
	"Generations": [{
		"AnimalCrossing": {
			"ReleaseDate": "Sept. 15, 2002",
			"LabelName": "Animal Crossing",
			"Platform": "Nintendo GameCube&#153;",
			"ImageUrl": "assets/img/animal-crossing-pack-shot-lg.png",
			"HourID": {
				"12am": "As6_i8RoKP0",
            "1am": "8qnkNjDAd4k",
				"2am": "QdrjrVPAMvQ",
				"3am": "nOROAUpqrGU",
				"4am": "xTXgAy1TJt8",
				"5am": "nXRK1OmRUq4",
				"6am": "voceB48hemo",
				"7am": "l5285eKta-c",
				"8am": "w0uOCxFYq2U",
				"9am": "wxd56GLRxa0",
				"10am": "Wdvh7PLW0G0",
				"11am": "X0FFrjTeWr0",
				"12pm": "_1YpXECC7MY",
				"1pm": "OvhAeNNG-RQ",
				"2pm": "uuduck3SJo8",
				"3pm": "aGUzuX6cJvc",
				"4pm": "uOsads28JTg",
				"5pm": "Wqu5UfBFUW8",
				"6pm": "FtPwnwHmS9I",
				"7pm": "6c7Kgf0d2qk",
				"8pm": "NOA89fdYmqw",
				"9pm": "RKPjKC8bs14",
				"10pm": "KYjFqcTNzM0",
				"11pm": "qw8FTCaAFSM"
			}
		}
   }, {
		"CityFolk": {
			"ReleaseDate": "Nov. 16, 2008",
			"LabelName": "Animal Crossing: City Folk",
			"Platform": "Wii&#153;",
			"ImageUrl": "assets/img/city-folk-pack-shot-lg.png",
			"HourID": {
				"12am": "A_00O4KWBxY",
				"1am": "uX2NxSN49Tg",
				"2am": "LAioanQMG_A",
				"3am": "_pCBzrFnTlw",
				"4am": "eSfQrWXD94A",
				"5am": "zQLvrhUXwtE",
				"6am": "mWa-tiP3a_o",
				"7am": "-CtfRww-2YM",
				"8am": "OHxpIqpAjz0",
				"9am": "T9ieUkNOEf4",
				"10am": "25wXOGbmWOc",
				"11am": "TPFZhtkP7M0",
				"12pm": "vZVS2FtVWHA",
				"1pm": "G3rtW1G2Ixg",
				"2pm": "LiXoQXCFhF8",
				"3pm": "CM58GBw4JkE",
				"4pm": "wqaKOCbeXmY",
				"5pm": "HXG9zU2Lb6g",
				"6pm": "iLSwc8wgJeo",
				"7pm": "rmtKHo7GB64",
				"8pm": "DhrsQO9Pkbs",
				"9pm": "Fl4M-a3eBnw",
				"10pm": "tEWFq1_NVSg",
				"11pm": "ytHqYVbuLt4"
			}
		}
	}, {
		"NewLeaf": {
			"ReleaseDate": "June 9, 2013",
			"LabelName": "Animal Crossing: New Leaf",
			"Platform": "Nintendo 3DS&#153;",
			"ImageUrl": "assets/img/new-leaf-pack-shot-lg.png",
			"HourID": {
				"12am": "UWx_K5g2fI8",
				"1am": "M-Odurf9p84",
				"2am": "lA7Q03Zids4",
				"3am": "BWmxsv43t5U",
				"4am": "PZQVC_nBAoc",
				"5am": "n9UmEMFVnII",
				"6am": "3m6VPcr-ppU",
				"7am": "RhYOHSTa3CM",
				"8am": "F98WiwAQjV8",
				"9am": "me7URNQeQoQ",
				"10am": "AbvBd2_0aOM",
				"11am": "s5IBmnS_j7Y",
				"12pm": "0vrwZlwSpg0",
				"1pm": "2CJ6ia2De74",
				"2pm": "IKgjYchV8po",
				"3pm": "KOdyX4GuffI",
				"4pm": "RU1BcTnIqV8",
				"5pm": "Y5eVLcSHiCk",
				"6pm": "7hCC7YiEojg",
				"7pm": "ejhyQ291CFQ",
				"8pm": "b_AOf5r9Dto",
				"9pm": "YTmEUx3xDNM",
				"10pm": "oR-29kYl_a0",
				"11pm": "dG_En_T9AnA"
			}
		}
	}]
};

gens.forEach(function (gen, index) {
   Gen.find({'name': gen}, function (err, gens) {
      if (!err && !gens.length) {
         Gen.create({name: gen});
      }
   });
});