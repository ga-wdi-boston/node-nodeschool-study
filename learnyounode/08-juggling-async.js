'use strict';

const http = require('http');
const bl = require('bl');

var results = [];
var counter = 0;

var juggle = function(i){
  http.get(process.argv[2 + i], function(response){
    response.pipe(bl(function(err,data){
      if (err){
        console.err(err);
      }

      results[i] = data.toString();
      counter ++;

      if (counter === 3) {
        results.forEach(function(e){
          console.log(e);
        });
      }
    }));
  });
};

for (var i = 0; i < 3; i++){
  juggle(i);
}
