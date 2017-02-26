const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split('\n').length - 1;
console.log(lines);

// This solution worked in node as is but was failing me in the learnyounode module bc it was not named the
// way it was expecting it to be named
// const fs = require('fs');
// const readme = fs.readFileSync('../README.md');
// const lines = readme.toString().split('\n').length - 1;
// console.log(lines);
// my readme has 86 line in it
