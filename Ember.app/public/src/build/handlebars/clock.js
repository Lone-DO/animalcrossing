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