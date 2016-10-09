nums = process.argv.slice(2);

function sum(a, b){
  return +a + +b;
}

console.log(nums.reduce(sum));
