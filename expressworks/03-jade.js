// express js library
var express = require('express')

// instantiate, invoke express
var app = express()

// set paramaters
// view engine is name of the library which is jade
app.set('view engine', 'jade')

// view is name of the folder that will be passed to us
app.set('views', process.argv[3])


//route is /home
app.get('/home', function(req, res){
  res.render('index', {date: new Date().toDateString()})
})

// start the server
app.listen(process.argv[2])
