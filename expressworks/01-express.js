'use strict';

let express = require('express')
let app = express();


app.get('/home', (req, res) => {
  res.end('Hello World!')
});


app.listen(process.argv[2]);
