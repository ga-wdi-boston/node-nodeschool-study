var fs = require('fs');
var myModule = require('./05-module.js')
var dirName = process.argv[2]
var fileExtension = process.argv[3];

myModule(dirName, fileExtension, function (err, list) {
  if (err) {
    return console.log(err)
  }
  list.forEach(function (file) {
    console.log(file)
  })
})
