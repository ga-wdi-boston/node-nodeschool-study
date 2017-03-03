'use strict';

let express = require ('express')

let app = express();


app.put('/message/:id', function(req, res){
  let str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');
    res.send(str)
});


app.listen(process.argv[2]);
