var filter = require('./05a-make-it-modular-filter.js');
var directory = process.argv[2];
var filterStr = process.argv[3];

filter(directory, filterStr, function (err, list) {
  if (err) return console.error(err);
  list.forEach(function (file) {
    console.log(file);
  });
});
