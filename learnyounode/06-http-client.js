var http = require('http');

function printData (response){
  response.setEncoding('utf8').on('data', function(data){
    console.log(data);
  })
}

http.get(process.argv[2], printData)
