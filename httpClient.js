var http = require('http');

http.request(process.argv[2], function(response) {
	response.setEncoding('utf8');

	response.on('data', function(data) {
		console.log(data);
	});

	response.on('error', function(error) {
		console.error;
	});

}).end();


/*

var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');

	response.on('data', console.log);
	response.on('error', console.error);
})

*/
