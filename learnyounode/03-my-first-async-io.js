 'use strict'
require('fs').readFile(process.argv[2], 'utf8', function(e, data){
  console.log(data.split('\n').length - 1)
})
