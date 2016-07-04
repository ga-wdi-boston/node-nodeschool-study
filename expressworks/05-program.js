'use strict'

let express = require('express');
let app = express();
app.put('/message/:id', function(req, res){
  let id = req.params.id
  let sha = require('crypto')
             .createHash('sha1')
             .update(new Date().toDateString() + id)
             .digest('hex')
  res.send(sha)
});
app.listen(process.argv[2])
