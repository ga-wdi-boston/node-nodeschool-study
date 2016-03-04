var fs = require('fs');
var path = require('path');

var mymodule = fs.readdir(givenPath, function (err, data) {
  if (err) {
    return callback(err); // early return
  }

  for (var i = 0; i < data.length; i++) {
    var just = path.extname(data[i]);

    if ('.'+ext === just) {
      console.log(data[i]);
    }
  }
});

module.exports = function () {
  mymodule
}
