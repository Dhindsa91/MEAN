var fs = require('fs');

console.log('getting file');

var file = fs.readFileSync('readFileSync.js');

console.log('got the file');

console.log('app continues...');
