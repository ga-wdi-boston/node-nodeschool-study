// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).
var ary = process.argv;
var result = 0;

for (i = 2; i < ary.length; i++) {
  result += Number(ary[i]);
}

console.log(result);
