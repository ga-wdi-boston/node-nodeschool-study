var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var arrayOfLines = function(buf){
	var str = buf.toString();
	var arr = str.split('\n');
	return arr;
};

arrayOfLines(buf);

var countLineBreaks = function() {
	var spaces = (arrayOfLines(buf).length) - 1;

	return spaces;
};

countLineBreaks();

console.log(countLineBreaks());