var myModule = require('./makingItModular_module');

myModule(process.argv[2], process.argv[3], function(err, filtered) {
	if (err) {
		console.error(err);
	}

	filtered.forEach(function(file){
		console.log(file);
	});
});