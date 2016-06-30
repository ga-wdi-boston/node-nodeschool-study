argument = process.argv.slice(2);
var sum = 0;
for(var i=0; i<argument.length; i++) {
  sum += Number(argument[i]);
}
console.log(sum);
