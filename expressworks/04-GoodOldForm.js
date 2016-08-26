var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

app.use(bodyParser.urlencoded({extended: false}));
app.post('/form', function(request, result) {
  result.send(request.body.str.split('').reverse().join(''));
});

app.listen(port || 3000);
