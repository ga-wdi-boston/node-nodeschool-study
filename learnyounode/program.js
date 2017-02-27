
var module = require('mymodule.js');
var first = process.argv[2];
var second = '.' + process.argv[3];
// console.log(second)

fs.readdir(first, (err, data) => {
  var list = data;
  // console.log(list)
  list.forEach(function(word) {
    if (word.includes(second)) {
      console.log(word);
    }

  });

});
