
var http = require('http')
var fs = require('fs')

var upperCase = function(inStream, outStream){
 var map = require('through2-map')
 inStream.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
 })).pipe(outStream)
}

var server = http.createServer(upperCase)

server.listen(process.argv[2])


