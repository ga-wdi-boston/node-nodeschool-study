var path = require('path')
var express = require('express')
var app = express()

// This is how you can call static middleware assuming your static folder is public
// and it's in the same folder as the main project file:
// app.use(express.static('public'))

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
