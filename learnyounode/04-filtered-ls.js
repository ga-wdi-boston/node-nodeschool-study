 'use strict'
let fs = require('fs')
file:///Users/Huey/.nvm/versions/node/v4.4.4/lib/node_modules/learnyounode
/node_apidoc/path.html
fs.readdir(process.argv[2], function(e, list){
  for(let i = 0; i < list.length; i++){
    file=list[i]
    extension = file.slice(file.lastIndexOf('.') + 1)
    if(extension == process.argv[3])
      console.log(file)
  }
})
