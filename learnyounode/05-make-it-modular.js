var listByExt = require('./05-listByExt.js');

listByExt(process.argv[2], process.argv[3], function(err, data) {
  if(err) {
    return;
  }
  data.forEach(function(elem) {
    console.log(elem);
  })
});
