'use strict';

let express = require('express')
let app = express()
let crypto = require('crypto')



app.put('/message/:NAME', function(req, res){
  let id = req.params.NAME

  let test = crypto.createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

  res.send(test)

});




app.listen(process.argv[2])
