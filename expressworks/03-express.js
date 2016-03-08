'use strict';

let express = require('express');
let app = express();
let port = process.argv[2];
let path = process.argv[3];

app.set('view engine', 'jade');
app.set('views', path);

app.get('/home', (request, response) => {
  response.render('index', {date: new Date().toDateString()});
});

app.listen(port);
