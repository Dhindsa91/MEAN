var fs = require('fs');

console.log('getting file');
var onFileLoad = function(err, file) {
  console.log('got the file');
};

fs.readFile('readFileSync.js', onFileLoad);

console.log('app continues...');
