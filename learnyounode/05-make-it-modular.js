let mymodule = require('./mymodule');
let dir = process.argv[2];
let ext = process.argv[3];

const callback = function (err, list) {
  if (err) throw err;
  list.forEach(function(item) {
    console.log(item);
  });
};

mymodule(dir, ext, callback);
