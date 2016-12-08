var path = require('path');
var fs = require('fs');
var input = process.argv[2];
var fileType = '.' + process.argv[3];
var filteredArray = [];

function filter(callback){
	fs.readdir(input, function makeList(err, list){
		for (i=0, len=list.length; i<len; i++) {
			if (path.extname(list[i]) === fileType) {
				filteredArray.push(list[i]);
			};
		};
		callback();
	})
}

function logged(){
	for (i=0, len=filteredArray.length; i<len; i++){
		console.log(filteredArray[i])
	}
}

filter(logged);
