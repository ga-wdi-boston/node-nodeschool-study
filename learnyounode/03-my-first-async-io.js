
var fs = require('fs');
var input = process.argv[2];
var lineCount;

function countLines(callback) {
	fs.readFile(input, 'utf8', function doneCounting(err, contents) {
		lineCount = contents.split("\n").length - 1;
		callback();
	})
};

function logNumber(){
	console.log(lineCount);
};

countLines(logNumber);
