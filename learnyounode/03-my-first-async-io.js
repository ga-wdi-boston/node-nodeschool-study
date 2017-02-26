const fs = require ('fs');

const test = function (err, data) {
  if (!err) {
  let string = data
  string = string.toString();
  string = string.split(/\n/);
  console.log(string.length-1);
}
}
fs.readFile(process.argv[2], test)
