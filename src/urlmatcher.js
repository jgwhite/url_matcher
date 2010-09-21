// Project: URLMatcher Utility Class
// Website: http://github.com/jgwhite/url_matcher
// Authors: jamie@jgwhite.co.uk
// License: Licensed under MIT license

var URLMatcher = function(url) {
  this.url = url;
  this.href = this.url;
};

URLMatcher.prototype.protocol = function() {
  var match = this.url.match(/^https?:/);
  return match && match[0];
},

URLMatcher.prototype.host = function() {
  var match = this.url.match(/^https?:\/\/([^\/]+)/);
  return match && match[1];
},

URLMatcher.prototype.pathname = function() {
  var match = this.url.match(new RegExp((this.host() ? this.host() : '^') + '([^#?]+)'));
  return match && match[1];
},

URLMatcher.prototype.search = function() {
  var match = this.url.match(/\?[^#]+/);
  return match && match[0];
},

URLMatcher.prototype.hash = function() {
  var match = this.url.match(/#.+/);
  return match && match[0];
}
