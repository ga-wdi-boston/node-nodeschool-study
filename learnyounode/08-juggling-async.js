var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data){
    console.log(data.toString());
    http.get(process.argv[3], function(response){
      response.setEncoding('utf8');
      response.pipe(bl(function(err, data){
        console.log(data.toString());
        http.get(process.argv[4], function(response){
          response.setEncoding('utf8');
          response.pipe(bl(function(err, data){
            console.log(data.toString());
          }));
        });
      }));
    });
  }));
});


