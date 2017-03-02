const fs = require('fs');

let name = fs.readFileSync(process.argv[2]);
let number = name.toString().split('\n');
let result = 0;


number.forEach(function(word){
  result += 1;
})

console.log(result -1);
