
var argv = process.argv;

var sum = 0;

for (var i=2; i<argv.length; i++){
  sum += +argv[i];
}

 console.log(sum);
// console.log(process.argv);
