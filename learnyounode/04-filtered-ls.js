var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, cb) {

  fs.readdir(dir, function (err, list) {
    if (err) {
      return cb(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    cb(null, list)
  })
}


// OFFICIAL SOLUTION
// var fs = require('fs')
//      var path = require('path')
//      fs.readdir(process.argv[2], function (err, list) {
//        list.forEach(function (file) {
//          if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//        })
//      })

