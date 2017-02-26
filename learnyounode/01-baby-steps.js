var args = process.argv;
var counter = 0;

for (var i = 2; i < args.length; i++) {
  counter += Number(args[i]);
}

console.log(counter);
