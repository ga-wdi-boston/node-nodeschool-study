
var http = require('http');
var bl = require('bl');
var results = [];
var counter = 0;

var httpGet = function(index){
  http.get(process.argv[2+index], function(res){
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.err(err);
      };
      results[index] = data.toString();
      if( counter === 2) {
        for(var i = 0; i<3 ; i++){
          console.log(results[i]);
        };
      };
      counter ++;
    }));
  }).on('error', function(e){
    console.log("Got error: " + e.message);
  });
}

for(var i = 0; i<3 ; i++){
  httpGet(i);
}


/*
# PASS Your solution to JUGGLING ASYNC passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)
*/
