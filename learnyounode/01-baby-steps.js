var results = 0;

for (var i = 2; i < process.argv.length; i++) {
  results += +process.argv[i];
}

console.log(results);

