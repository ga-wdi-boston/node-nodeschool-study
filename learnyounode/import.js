'use strict';

let readThisFile = function (path, extension) {
  var fs = require('fs')
  var path = require('path')
  let fileList = [];

  fs.readdir(path, (err, files) =>  {
    files.forEach(function (file)
    {
      if (path.extname(file) === '.' + extension)
        {
          fileList.push(file)
        }
    })

    fileList.forEach(function (passedFile)
      {
        console.log(passedFile)
      }
    )

  })
};

module.exports = {
  readThisFile,
};
