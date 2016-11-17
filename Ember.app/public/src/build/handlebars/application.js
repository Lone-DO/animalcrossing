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