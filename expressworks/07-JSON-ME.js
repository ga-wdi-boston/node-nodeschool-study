'use strict';

let express = require ('express');
let fs = require ('fs')

let app = express();


app.get('/books/', function(req, res){
  fs.readFile(process.argv[3], (error, data) => {
    if (error) {
      // sends a 500 error
      return res.sendStatus(500);
    }
     res.json(JSON.parse(data));
  });
});


app.listen(process.argv[2]);
