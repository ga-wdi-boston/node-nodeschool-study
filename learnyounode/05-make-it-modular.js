var listFileByExt = require('./05-make-it-modular-listFileByExt');
listFileByExt(process.argv[2], process.argv[3], function cb(err, data) {
  if(err) {
    return console.error('There was an error:', err);
  }
  data.forEach(function(elem) {
    console.log(elem);
  });
});
