'use strict'
require('./modular.lib.js')(process.argv[2], process.argv[3],
  function(e, valid_files){
    if(e) console.log(e)
    else valid_files.forEach(function(file){ console.log(file) })
  }
)
