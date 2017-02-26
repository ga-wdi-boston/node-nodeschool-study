let accum = 0;
for (let i = 2; i < process.argv.length; i++) {
  accum += parseInt(process.argv[i]);
}
console.log(accum);
