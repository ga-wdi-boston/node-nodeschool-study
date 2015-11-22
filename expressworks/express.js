var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(require('stylus').middleware('/path/to/*.styl' ))

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));
});

app.put('/message/:id', function(req, res){
      res.send(require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex'));
})

app.get('/search', function(req, res){
  var query = req.query;
  res.send(query);
})

app.listen(process.argv[2]);
