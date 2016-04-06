var fs = require('fs');


var string = fs.readFileSync(process.argv[2], 'utf8');

console.log(string.split('\n').length - 1);

