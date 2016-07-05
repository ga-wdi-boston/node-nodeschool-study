'use strict'
require('http').get(process.argv[2], function(stream){
  stream.setEncoding('utf8')
  stream.on('data', console.log)
  stream.on('error', console.log)
})
