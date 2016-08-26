var express = require('express');
var app = express();


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

app.use(require('stylus').middleware(file || 'public'));
app.use(express.static(file || 'public'));

app.listen(port || 3000);
