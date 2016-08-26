var express = require('express');
var app = express();


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

app.set('view engine', 'jade');
app.set('views',file);
app.get('/home', function(request, result) {
  result.render('index', {date: new Date().toDateString()});
});

app.listen(port || 3000);
