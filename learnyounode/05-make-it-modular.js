var filter = require('./filter-files-by-type');
var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(error, data) {
  data.forEach(function(file) {
    console.log(file);
  });
});
