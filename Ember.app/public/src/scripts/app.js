this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["app"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\r\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "clock", options) : helperMissing.call(depth0, "partial", "clock", options))));
  data.buffer.push("\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("    \r\n        <div id=\"start\">\r\n        <!--		<img src=\"../assets/img/bevel.png\">-->\r\n            <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "start", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\r\n                <img \r\n                     src=\"../assets/img/kk_button_tumblr.png\"  \r\n                     onmouseover=\"this.src='../assets/img/kk_button_tumblr.gif';\"\r\n                     onmouseout=\"this.src='../assets/img/kk_button_tumblr.png';\">\r\n            </a>\r\n        </div>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"app\">\r\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isStarted", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\r\n			<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideHint", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"cancel-button\">X</button>\r\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "guide", options) : helperMissing.call(depth0, "partial", "guide", options))));
  data.buffer.push("\r\n\r\n			 ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n				<button class=\"col-xs-6 btn btn-default\">Generations</button>\r\n			");
  }

  data.buffer.push("<header>\r\n	<img id=\"banner\" src=\"../assets/img/Animal_Crossing_Logo.png\">\r\n</header>\r\n<body>\r\n	<div  class=\"container\">\r\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "app", options) : helperMissing.call(depth0, "render", "app", options))));
  data.buffer.push("\r\n		<div>\r\n			<div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\r\n			 ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "hintShowing", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n		</div>\r\n		</div>\r\n</body>\r\n<footer>\r\n	<div id=\"time\"></div>\r\n	<nav>\r\n		<li>\r\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "gen", options) : helperMissing.call(depth0, "link-to", "gen", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n		</li>\r\n		<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showHint", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\r\n			<button class=\"col-xs-6 btn btn-default\">Help!!</button>\r\n		</li>\r\n	</nav>\r\n	<p class=\"col-xs-12\">&copy;2016 Lone-DO</p>\r\n</footer>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["clock"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"clock\">\r\n	<button class=\"btn btn-danger col-xs-12 \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "end", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Quit</button>\r\n	<img id=\"clockPhase\" src=\"../assets/img/Timeline/AC%20clock.gif\">\r\n	<div class=\"clockTime\">\r\n		 <span class=\"_t0 col-md-1\">L</span>\r\n		 <span class=\"_t1 col-md-1\">O</span>\r\n		 <i class=\"_t2 col-md-1\">:</i>\r\n		 <span class=\"_t3 col-md-1\">A</span>\r\n		 <span class=\"_t4 col-md-1\">D</span>\r\n		 <i class=\"_t5 col-md-1\">:</i>\r\n		 <span class=\"_t6 col-md-1\">N</span>\r\n		 <span class=\"_t7 col-md-1\">G</span>\r\n		</div>\r\n	<iframe id=\"songPhase\" width=\"300\" height=\"200\" src=\"\"></iframe>\r\n</div>\r\n  \r\n\r\n<div class=\"generation\">\r\n	<h1>Generation Selector</h1>\r\n    \r\n\r\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["components/gen-album"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n    		<li> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hourID", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </li>\r\n  		");
  return buffer;
  }

  data.buffer.push("<div class=\"blog-post\">\r\n	<h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "album.labelName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\r\n	<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "album.releaseDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\r\n	<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "album.platform", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&#153;</p>\r\n	<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("album.imageURL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\r\n</div>\r\n<div>\r\n	<ul>\r\n		");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "hourID", "in", "album.hourID", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n	</ul>\r\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["gen/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<button class=\"cancel-button\">Back</button>");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "gen", options) : helperMissing.call(depth0, "link-to", "gen", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" \r\n\r\n\r\n\r\n<div class=\"letter\">\r\n	<h2>New Generation</h2>\r\n	<form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveAlbum", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\r\n	  <div class=\"form-group\">\r\n		  <ol>\r\n			  <li>\r\n				  <label for=\"labelName\">Label Name:</label>\r\n				  ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'required': "STRING"};
  options = {hash:{
    'valueBinding': ("labelName"),
    'class': ("post-field"),
    'id': ("labelName"),
    'placeholder': ("Name"),
    'required': ("required")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n				  </li>\r\n			  <li>\r\n				  <label for=\"releaseDate\">Release Date:</label>\r\n				  ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("releaseDate"),
    'class': ("post-field"),
    'id': ("releaseDate"),
    'placeholder': ("Jan. 3, 1337"),
    'required': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n				  </li>\r\n			  <li>\r\n				  <label for=\"platform\">Platform:</label>\r\n				  ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'id': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'id': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("platform"),
    'class': ("post-field"),
    'placeholder': ("nintendo"),
    'id': ("platform"),
    'required': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n				  </li>\r\n			  <li>\r\n				  <label for=\"imageURL\">Upload Image(URL):</label>\r\n				  ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("imageURL"),
    'class': ("post-field"),
    'id': ("imageURL"),
    'placeholder': ("http://..."),
    'required': ("required")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n				  </li>\r\n		  </ol>\r\n	  </div>\r\n\r\n		<div class=\"form-group\">\r\n			<h3 for=\"text\">Insert Youtube ID's only</h3>\r\n			<ul>\r\n				<li>\r\n					<label for=\"hourID\">12am</label>\r\n				  ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'required': "STRING"};
  options = {hash:{
    'valueBinding': ("hourID"),
    'class': ("post-field"),
    'id': ("hourID"),
    'placeholder': ("youtube/ID"),
    'required': ("required")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n				  </li>\r\n			</ul>\r\n		</div>\r\n		");
  hashContexts = {'id': depth0,'class': depth0,'type': depth0,'value': depth0};
  hashTypes = {'id': "STRING",'class': "STRING",'type': "STRING",'value': "STRING"};
  options = {hash:{
    'id': ("save"),
    'class': ("btn btn-default"),
    'type': ("submit"),
    'value': ("Save!")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n	</form>\r\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["gen/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<button class=\"cancel-button\">Back</button>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<button class=\"action-button\">New Generation</button>");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\r\n		");
  hashContexts = {'album': depth0};
  hashTypes = {'album': "ID"};
  options = {hash:{
    'album': ("album")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['gen-album'] || depth0['gen-album']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "gen-album", options))));
  data.buffer.push("\r\n	");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" \r\n<h2 class=\"title\">Animal Crossing Generations</h2>\r\n\r\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "gen.create", options) : helperMissing.call(depth0, "link-to", "gen.create", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n\r\n<div class=\"gens\">\r\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "album", "in", "model.albums", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["guide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"guide\">\r\n		<h3>AcClock... README</h3>\r\n		<p>\r\n			The purpose of this project is to create a 3rd party App that brings the nostalgia to your Mobile/ PC.\r\n		</p>\r\n		<p>\r\n			Bring back the Nostalgic tunes as we've known it in the past, Dynamic music that reflects with your local time just as had in the world of Animal Crossing. The Digital clock will be able to play along in your background throughout your day, or if you are wishing to change the mood, you will be able to manually change the clocks time.\r\n		</p>\r\n		<p>\r\n			But what about the classics? There will be a theme feature that allows you to choose which Series you want to listen to and even have the overall view of the page change with it, more n more features to help give you the comfort & vibes from, Animal Crossing.\r\n		</p>\r\n		<p>\r\n			The app version will host the files itself, and the Website will use API to pull the information. Later on there will be an option on both versions to choose Offline/ Online mode, otherwise testing will be done to  see which one overall performs the best and will be set as the default~\r\n		</p>\r\n		<div class=\"rLinks\">\r\n			<span>Remember to check out the wiki for full details <a href=\"https://github.com/Lone-DO/AC-Clock/wiki\">Click me</a></span>\r\n			<p>\r\n				General Idea,\r\n				<a href=\"http://tane.us/ac/wwcf.html\"><li>Tane</li></a><br>\r\n					Note that i recently found this site and have been discussing this site idea!<br><br>\r\n				Nintendo Official Sites\r\n				<a href=\"http://www.animal-crossing.com\"><li>Official Site</li></a><br>\r\n				Extra Sites\r\n				<a href=\"http://www.pixelstalk.net/animal-crossing-wallpapers-hd/\"><li>Wallpapers/ images</li></a><br>\r\n			</p>\r\n            <p>\r\n                <a href=\"https://www.youtube.com/playlist?list=PL719681019F01F212\">Original OST</a>\r\n            </p>\r\n            <p>\r\n                <a href=\"https://www.youtube.com/playlist?list=PLoIp-AJdIshrKJ7O7h2DmXCS9POcR8lTZ\">New Leaf OST</a>\r\n            </p>\r\n            <p>\r\n                <a href=\"https://www.youtube.com/playlist?list=PLjZDKdtibWQ5MscZsybx1uU15IsLlSLzi\">City Folk OST</a>\r\n            </p>\r\n		</div>\r\n</div>");
  
});
App = Ember.Application.create();

App.Router.map(function() {
	// put your routes here
	this.resource('app', function() {
		this.resource('guide');
		this.resource('clock');
	});//default
	
	this.resource('gen', function() {
  		this.route('create');
	});
});

App.IndexRoute = Ember.Route.extend({

});

App.IndexController = Ember.ObjectController.extend({

});
'use strict';
App.ApplicationController = Ember.Controller.extend({
    actions: {
        showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        }
    }
});
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
									Generation = '';
								
							//Api loop Head/ Opening
//								Generation += '<ul><li>';
								Generation += '<div>';
								
								Generation += '<article><a>';
								
							//Api loop for img data
								Generation += '<a href="' + _img + '">';
								Generation += '<img src="' + _imgOut + '" ';
								Generation += 'onmouseover="this.src=' + "'" + _imgOver + "';" + '" ';
								Generation += 'onmouseout="this.src=' + "'" + _imgOut + "';" + '" ';
								Generation += '></a>';
								
							
								
							//Aoi loop for descriptions
								Generation += '<dd class="data">' + _release + '</dd>';
								Generation += '<dd class="genTitle">' + _name + '</dd>';
								
								//Api Loop for play button	
								Generation += '<button class="btn btn-link set' + i + '">';
								Generation += 'Play This' + '</button>';
								
								Generation += '<dd class="platform">' + _platform + '</dd>';
								
							
								
							//Api loop closing
								Generation += '</a></article></div>';
//								Generation += '</li></ul>';
								
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
								 banner = document.getElementById('banner'),
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
									 time = function() {},
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
								},
									 time = function () {};
								
							//Concatinates time Data & Displays
								currentTime = hours + ":" + minutes + ":" + seconds;
								for (var i = 0, len = currentTime.length; i < len; i++) {
											$('._t' + i).text(currentTime[i]);
										}; 
//								$(".clock i").text(currentTime);
								/**Plays NewLeaf**/
								$('.set0').click(function (){
									lastGen = _currentGen;
									_currentGen = _nlID;
									play();
									banner.src = 
										("../../../assets/img/Animal_Crossing_New_Leaf_logo.png");
								});
								/**Plays CityFolk**/
								$('.set1').click(function (){
									lastGen = _currentGen;
									_currentGen = _cfID;
									play();
									banner.src = 
										("../../../assets/img/Animal_Crossing-_City_Folk_(logo).png");
								});
								/**Plays Original**/
								$('.set2').click(function (){
									lastGen = _currentGen;
									_currentGen = _oID;
									play();
									banner.src = 
										("../../../assets/img/Animal_Crossing_Logo.png");
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
					$(function plugin(){
						console.error('plugin loaded');
						$('.generation').slick({
							centerMode: true,
						  centerPadding: '60px',
						  slidesToShow: 3,
						  responsive: [
							 {
								breakpoint: 768,
								settings: {
								  arrows: false,
								  centerMode: true,
								  centerPadding: '40px',
								  slidesToShow: 3
								}
							 },
							 {
								breakpoint: 480,
								settings: {
								  arrows: false,
								  centerMode: true,
								  centerPadding: '40px',
								  slidesToShow: 1
								}
							 }
						  ]
						});
					})
				});
			// *****API Rendering*****
			}); //End of Strict Script
		},
		end: function () {
            this.set('isStarted', false);
        }
    }
});
App.GenIndexRoute = Ember.Route.extend({
	model: function() {
    var url = '/api/albums';
	return Ember.$.getJSON(url).then(function(data) {
		return data;
	});
  }
});


App.GenCreateController = Ember.ObjectController.extend({
	labelName: '',
	releaseDate: '',
	platform: '',
	imageURL: '',
	hourID: [''],
	saveButtonText: 'Save',

	clearFields: function() {
		this.set('labelName', '');
		this.set('releaseDate', '');
		this.set('platform', '');
		this.set('imageURL', '');
		this.set('hourID', ['']);
	},

	actions: {
		saveAlbum: function() {
			var albumData = {
				labelName: this.get('labelName'),
				releaseDate: this.get('releaseDate'),
				platform: this.get('platform'),
				imageURL: this.get('imageURL'),
				hourID: this.get('hourID')
			},
				 url = '/api/albums',
				 that = this;
			this.set('saveButtonText', 'Saving...');
			Ember.$.post(url, albumData).then(function(saveResult) {
				if(saveResult.status === 'OK') {
					that.clearFields();
					that.transitionToRoute('gen');
				} else {
					that.set('saveButtonText', 'Couldn\'t save. Try again?');
				}
			});
		}
	}
});