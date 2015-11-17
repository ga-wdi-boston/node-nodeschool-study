nodeArgs = process.argv;
nodeArgs.splice(0, 2);
total = nodeArgs.reduce(function(a, b){return a + Number(b)}, 0);
console.log(total)
