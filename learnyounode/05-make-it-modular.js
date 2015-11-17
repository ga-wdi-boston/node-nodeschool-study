var myModule = require('./05-mymodule.js');

myModule(process.argv[2], process.argv[3], function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
