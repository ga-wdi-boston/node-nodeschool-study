
console.log(process.argv.slice(2).reduce(function (memo, current) {
  return memo + parseInt(current, 10);
}, 0));
