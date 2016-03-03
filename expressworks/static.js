'use strict';
// This exercise is about serving static assets like HTML files. There are many ways to do it, but we want you to apply static middleware to serve the file index.html.  Please don't use ANY routes like app.get. ONLY static.  Your solution must listen on the port number supplied by process.argv[2].  The index.html file is provided and usable via the path supplied by process.argv[3].

var express = require('express');
var app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);


// This is how you can call static middleware:
// app.use(express.static(path.join(__dirname, 'public')))
