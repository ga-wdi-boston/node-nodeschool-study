var fs = require('fs');

var my_file_as_line_array = fs.readFileSync(process.argv[2]).toString().split('\n');

var number_of_lines_in_file = my_file_as_line_array.length - 1;

console.log(number_of_lines_in_file);
