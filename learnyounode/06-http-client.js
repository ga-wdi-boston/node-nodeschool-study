const http = require('http');

// using the required file
http.get(process.arv[2], function (response) {
  // take the response and set the encoding to utf8
  response.setEncoding('utf8')
  // take the response and log the data in the console
  response.on('data', console.log)
  // take the response and log any errors in the console
  response.on('error', console.error)
})
