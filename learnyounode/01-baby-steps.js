
function sumOfArray (e) {
  var sum = 0;
  for (var i = 2; i < e.length; i++) {
    sum = sum + Number(e[i]);
  };
  console.log(sum);
};

sumOfArray(process.argv);
