// Function that gets arguments from the console, and returns
// the arguments we need, converted to numbers
var getConsoleArgs = function getConsoleArgs() {
  var consoleInput = process.argv;
  consoleInput.splice(0,2);
  var numbers = consoleInput.map(function(num) {
    return Number(num);
  });
  return numbers;
};

// Create a function that finds the sum of an array
var sumOfArray = function sumOfArray(array) {
  var sum = array.reduce(function(memo, num) {
    return memo + num;
  });
  return sum;
};

console.log(sumOfArray(getConsoleArgs()));
