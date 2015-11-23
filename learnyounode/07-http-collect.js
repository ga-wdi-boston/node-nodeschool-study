var bl = require('bl');
var http = require('http');



var responseConcat = function(response){

  var errorHandler = function(err, data){
    if(err){
      console.log(err)
    }
    var str = data.toString()
    console.log(str.length)
    console.log(str)
  }

  response.setEncoding('utf8')
  response.pipe(bl(errorHandler))
  response.on('error', console.error)
}

http.get(process.argv[2], responseConcat);


// Official answer
var http = require('http')
var bl = require('bl')
http.get(process.argv[2], function (response) {
 response.pipe(bl(function (err, data) {
   if (err)
     return console.error(err)
   data = data.toString()
   console.log(data.length)
   console.log(data)
 }))
})


