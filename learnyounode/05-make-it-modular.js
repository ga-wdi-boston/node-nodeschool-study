var module = require('./05-make-it-modular-2.js');

module.getFilteredFiles(process.argv[2], process.argv[3], function(err, data){
  data.forEach(function(fileName){
    console.log(fileName);
  });
});
