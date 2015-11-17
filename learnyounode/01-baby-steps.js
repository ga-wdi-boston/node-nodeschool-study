var result = 0;

for (var i = 2; i < process.argv.length; i++)
  answer += Number(process.argv[i]);

console.log(answer);
