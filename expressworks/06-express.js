'use strict';

let express = require('express');
let app = express();
let port = process.argv[2];

app.get('/search', (request, response) => {
  let query = request.query
  response.send(query);
});

app.listen(port);
