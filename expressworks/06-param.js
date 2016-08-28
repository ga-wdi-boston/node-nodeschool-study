var express = require('express');
var app = express();


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

///message/:id/:name/:data
app.put('/message/:id', function(request, result){
  var id = request.params.id;
  // var id = request.params.name;
  // var id = request.params.data;

  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  result.send(str);
});

app.listen(port || 3000);
