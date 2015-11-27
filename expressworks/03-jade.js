var express = require('express');
var app = express();
var path = process.argv[3];

//To tell Express.js app what template engine to use, apply this line to the
//Express.js configuration:
app.set('view engine', 'jade');

//This is how you can specify the path to the template files in the folder templates:
app.set('views', path);

app.get('/home', function(req, res) {
  //Instead of Hello World's res.end(), the res.render() function accepts
  //a template name and data (called locals):
  res.render('index', {date: new Date().toDateString()})
});

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);

