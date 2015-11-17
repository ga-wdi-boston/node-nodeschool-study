'use strict';

var http = require('http');

// var options = {
//   hostname : process.argv[2],
//   method : 'GET'
// };

// var requestObject = http.request(options, callback);

var callback = function callback(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    console.log(data);
  });
  response.on('error', function(error){
    console.error(error);
  });
  response.on('end', function(){
  });
};

var requestObject = http.get(process.argv[2], callback);

requestObject.end();
