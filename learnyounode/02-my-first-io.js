const fs = require ('fs');

const test = function () {
  let string = fs.readFileSync(process.argv[2])
  string = string.toString();
  string = string.split(/\n/);
  console.log(string.length-1);
}
test()
