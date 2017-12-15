var filename = 'index.js';

var hello = function(name) {
  console.log('Hello' + name);
};
var intro = function() {
  console.log('this is the index file');
};

module.exports = {
  hello: hello,
  intro: intro
};
