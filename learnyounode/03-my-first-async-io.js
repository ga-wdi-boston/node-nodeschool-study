var fs = require('fs');
var my_data_return = '';

var my_file_as_line_array = fs.readFile(process.argv[2], function(err, data) {
	if(err) {
		return 'err';
	} else {
		console.log(data.toString().split('\n').length - 1);
	}
});

// console.log(my_file_as_line_array);

// .toString().split('\n');

// var number_of_lines_in_file = my_file_as_line_array.length - 1;

// console.log(number_of_lines_in_file);
