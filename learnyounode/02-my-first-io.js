let fs = require('fs')

let filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1)

//NOTES
//  Documentation on Buffers can be found by pointing your browser here:
//  file:///Users/juliadaly/.npm-global/lib/node_modules/learnyounode/node_api
//  doc/buffer.html

// to count the number of newlines in a
//   string, recall that a JavaScript String can be .split() into an array of
//   substrings and that '\n' can be used as a delimiter
