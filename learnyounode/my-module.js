var fs = require('fs');

module.exports = function(dirPath, fileType, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) return callback(err);

    var filteredList = list.filter(function (listItem) {
      var splitItem = listItem.split('.');

      return splitItem[1] === fileType;
    });

    return callback(null, filteredList);
  });
};
