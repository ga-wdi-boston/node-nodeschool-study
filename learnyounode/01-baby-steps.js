'user strict'

var length = process.argv.length;
var sum = 0;

for (var i = 2; i < length; i++) {
  var numbers = +process.argv[i];
  sum += numbers;
}

console.log(sum);
