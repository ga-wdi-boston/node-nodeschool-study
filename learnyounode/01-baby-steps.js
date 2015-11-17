var sum = 0;
for (var i = 2, l = process.argv.length; i < l; i++) {
  sum += +process.argv[i];
}
console.log(sum);
