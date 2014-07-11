var fs = require('fs');
var newBuffer = fs.readFileSync(process.argv[2]);
var buffedStr = newBuffer.toString();
var splittedString =  buffedStr.split('\n');

console.log(splittedString.length -1);
