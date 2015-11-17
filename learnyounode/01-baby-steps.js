var result = 0;

for (var i = 2; i < process.argv.length; i++) {
  result += +process.argv[i];
  // result += Number(process.argv[i]);
}

console.log(result);
