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
  data.buffer.push("\r\n				  </li>\r\n		  </ol>\r\n	  </div>\r\n\r\n		");
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