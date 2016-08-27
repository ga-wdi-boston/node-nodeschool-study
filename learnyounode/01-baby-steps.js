// console.log(process.argv)
sum = 0;
var a = function () {

  for (var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }

  return sum;
};
a();
console.log(sum);
