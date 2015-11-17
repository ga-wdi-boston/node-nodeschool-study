
var fs = require('fs');


// The module must
//   export a single function that takes three arguments: the directory name,
//   the filename extension string and a callback function,
module.exports = function (directoryName, filter, callback)  {

  var returnArray = [];
  var moduleFilter = '.' + filter;
  var moduleCallback = function moduleCallback (err,data) {
      if (err)
          return callback(err); // early return

      var outcnt = 0
      for (var i=0; i < data.length; i++) {
        if (data[i].lastIndexOf(moduleFilter) > -1)
          returnArray[outcnt++]= data[i];
      }

      callback(null,returnArray);
  }


  fs.readdir(directoryName, moduleCallback);
};





