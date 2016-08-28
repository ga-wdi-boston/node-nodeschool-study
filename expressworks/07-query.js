var express = require('express');
var app = express();


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

app.get('/search', function(request, result){
  var query = request.query;
  result.send(query);
});

app.listen(port || 3000);
