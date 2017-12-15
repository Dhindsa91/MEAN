require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello('arvind');

var q = question.ask('whats the meaning of life');
console.log(q);

goodbye();
