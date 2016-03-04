var fs = require('fs');

filterList = function (err, list) {
  list.forEach(function(cV, i, array) {
    if (cV.endsWith('.' + process.argv[3])) {
      console.log(cV);
    }
  })
}

// var path = process.argv[2];
// var fileExt = process.argv[3];

filterListLog = function() {
  fs.readdir(process.argv[2], filterList)
}

module.exports = {
  filterListLog
}
