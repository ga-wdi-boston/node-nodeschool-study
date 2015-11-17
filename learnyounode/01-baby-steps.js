var array = process.argv;
var answer = function(ary){
  var result = 0;
  for (var i = 2; i < ary.length; i++){
    result += Number(ary[i]);
  }return result;
};

console.log(answer(array));
