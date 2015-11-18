  newArray = (process.argv).slice(2);

  sum = (newArray).reduce(function(prev, curr){
    prev = parseInt(prev);
    curr = parseInt(curr);
 //   console.log(prev, curr);
    return prev + curr;
  }, 0);

console.log(sum);
