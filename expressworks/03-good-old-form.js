'use strict';

let express = require ('express');
let bodyparser = require ('body-parser');

let app = express();

// tells app to load bodyparser
app.use(bodyparser.urlencoded({extended: false}))

// tells app to send the reverse of what it gets in
app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));
});


app.listen(process.argv[2]);
