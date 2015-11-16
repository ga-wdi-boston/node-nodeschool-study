var fs = require('fs');

var buf = fs.readFile(process.argv[2], function(err, data){
	if (err) throw err;
	else {
		var lineCount = buf.toString().split('\n').length - 1;
		console.log(lineCount());
		};
});
