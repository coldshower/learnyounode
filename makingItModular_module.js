var fs = require('fs');
var path = require('path');

module.exports = function(dir_name, ext_str, callback) {
	fs.readdir(dir_name, function(error, list){
		if (error) { // early return if error
			return callback(error);
		}

		var filtered = [];
		list.forEach(function(file) {
			if (path.extname(file) === "." + ext_str) {
				filtered.push(file);
			}
		});

		callback(null, filtered);
	});
}


// Official Solution uses filter rather than push. 





