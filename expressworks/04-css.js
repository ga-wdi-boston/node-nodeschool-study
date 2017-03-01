var express = require('express');
var app = express();
var path = process.argv[3];

app.use(require('stylus').middleware(__dirname));
app.use(express.static(__dirname));

app.get('/main.css', function(req, res) {

});
app.listen(process.argv[2]);
