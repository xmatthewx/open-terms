// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
var tabs = require("sdk/tabs");

var uri;


// sample function from: https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

tabs.on("ready", function(tab){
    
  uri = getLocation(tab.url);
  console.log('uri: ', uri);

});


// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: [/.*signup.*/, /.*join.*/, /.*start.*/],
  contentStyleFile: require("sdk/self").data.url("openterms.css"),
  contentScriptFile: [
  	self.data.url("jquery-1.11.0.min.js"),
  	self.data.url("openterms.js")
  ],
  // Send the content script a message inside onAttach
  onAttach: function(worker) {
  	console.log('pagemod()');
    worker.port.emit("openterms", uri);
  }
});

