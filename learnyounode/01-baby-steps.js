var sum = function(arr){
  var result = 0;
  for (var i = 2; i < arr.length; i++){
    result = result + Number(arr[i]);
  } return result;
};

console.log(sum(process.argv));
