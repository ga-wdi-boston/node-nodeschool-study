var fs = require('fs');

module.exports = function(directory, extension, callback) {
  var extFilter = new RegExp('\\.' + extension + '$');

  fs.readdir(directory, function (err, list) {
    if (err) {
      return callback(err);
    }
    var data = [];
    list.forEach(function (item){
      if (extFilter.test(item)) {
        data.push(item);
      }
    });
    callback(null, data);
  });

};
