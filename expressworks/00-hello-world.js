'use strict';

let express = require ('express')

let app = express();

// says at the localhost:port/home display hello world
app.get('/home', function(req, res){
  res.end('Hello World!');
});


app.listen(process.argv[2]);
