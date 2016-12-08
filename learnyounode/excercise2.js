// console.log(process.argv);

var input = process.argv;
var sum = 0;
for (i = 2, len = input.length; i < len; i++){
	sum += input[i] * 1;
}
console.log(sum)
