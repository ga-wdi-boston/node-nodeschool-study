var currentVal = 0;
for (var i = 2; i < process.argv.length; i++) {
  currentVal += Number(process.argv[i]);
}
console.log(currentVal);
