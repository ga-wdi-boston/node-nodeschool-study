'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (request, response) => {
  response.send(request.body.str.split('').reverse().join(''));
});

app.listen(port);
