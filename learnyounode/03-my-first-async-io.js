var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function callback(err, data){
	if (err) return console.error(err);
	else {
		var lineCount = data.split('\n').length - 1;
		console.log(lineCount);
	};
});
