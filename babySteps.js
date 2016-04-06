var arr = process.argv;
var total = 0;

for (var i = 2, len = arr.length; i < len; i++) {
	total += +arr[i];
}

console.log(total);