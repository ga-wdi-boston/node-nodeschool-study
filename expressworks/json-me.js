var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/books', function(req, res){

  fs.readFile(process.argv[3], function(error, string) {
    if (error) {
    res.send(400)
    }
    var object = JSON.parse(string)
    res.json(object)
  })

})




app.listen(process.argv[2])
