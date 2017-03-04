let result = 0;
let arr = process.argv
for (let i = 2; i < arr.length; i++) {
  result += Number(arr[i]);
}
console.log(result);
