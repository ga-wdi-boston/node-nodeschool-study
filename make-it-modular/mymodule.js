var fs = require('fs');

var mymodule = function(name,fileName, callback){
  var first = name;
  var second = '.' + fileName;
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


};


module.exports = mymodule;
