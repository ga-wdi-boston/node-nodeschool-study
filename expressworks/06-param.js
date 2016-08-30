// express js library
var express = require('express');

// instantiate, invoke express
var app = express();

// put verb, update, partial update
app.put('/message/:id', function(req, res){
  var id= req.params.id;
  var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    res.send(str);
});

app.listen(process.argv[2]);
