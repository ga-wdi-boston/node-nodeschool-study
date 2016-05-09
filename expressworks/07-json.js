'use strict';

let express = require('express')
let app = express()
let fs = require('fs')


app.get('/books', function(req, res){

  fs.readFile(process.argv[3], function(err, string) {

    if(err) {
      res.send(400)
    }

    let object = JSON.parse(string)
    res.json(object)

   })

})






app.listen(process.argv[2])
