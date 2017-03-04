const answer = require('./module');

let data = process.argv[2];
let extention = process.argv[3];
const print = function(word){
  console.log(word)
}

answer(data, extention, print);


// console.log(result);
