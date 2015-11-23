var filterByExt = require('./filter_module.js')

var print = function(err, data){
  if (err){
    return console.log(err);
  }
  data.forEach(function(fileName){
      console.log(fileName);
  });
}


filterByExt(process.argv[2], process.argv[3], print);
