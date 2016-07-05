// Write a route that extracts data from the query string in the GET /search URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format

var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var query = req.query
  // To output JSON
  res.send(query)
})

app.listen(process.argv[2])
