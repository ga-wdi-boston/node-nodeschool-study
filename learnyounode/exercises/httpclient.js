var http = require('http');

var url = process.argv[2];

function printOut (data){
  console.log(data);
}

function callback (response){
  response.setEncoding('utf8').on('data', printOut);
};

http.get(url, callback);
