var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterStr = process.argv[3];

mymodule(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  });
});
