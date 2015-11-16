var bl = require('bl');
var http = require('http');


var responseConcat = function(response){
  count += 1
  var errorHandler = function(err, data){
    if(err){
      console.log(err);
      return;
    }
    var str = data.toString()
    console.log(str)
    if(count < 5) {
      http.get(process.argv[count], responseConcat);
    } else {
      return;
    }
  }
  response.setEncoding('utf8')
  response.pipe(bl(errorHandler))

  response.on('error', console.error)
}
var count = 2
http.get(process.argv[count], responseConcat);




