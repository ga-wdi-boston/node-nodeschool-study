var sumArgs = function(args) {
  var sum = 0;

  for (var i = 2; i < args.length; i++) {
    sum += parseInt(args[i]);
  }

  return sum;
};

console.log(sumArgs(process.argv));
