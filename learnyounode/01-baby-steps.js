var total = 0;

for(var arg = 2; arg < process.argv.length; arg++) {
  total += Number(process.argv[arg]);
}

console.log(total);
