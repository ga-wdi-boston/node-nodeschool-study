var http = require('http');
var concatStream = require('concat-stream');
var urls = [process.argv[2], process.argv[3], process.argv[4]];

// need .on('error', callback) for both the http.get and the response

var results = [];
var requests = 0;
urls.forEach(function(url, i) { 
  http.get(url, function(response) {
    response.pipe(concatStream(function (data) { 
      results[i] = data.toString();
     }));

    response.on('end', checkResults);
    response.on('error', console.error);
  }).on('error', console.error);
}); 

var checkResults = function() {
  requests++;
  if (urls.length === requests) {
    results.forEach(function(data) {
      console.log(data);
    })
  }
};


// OFFICIAL SOLUTION
// var results = []  
// var count = 0  
 
// function printResults () {  
//  for (var i = 0; i < 3; i++) {  
//    console.log(results[i])  
//  }  
// }  
 
// function httpGet (index) {  
//  http.get(process.argv[2 + index], function (response) {  
//    response.pipe(bl(function (err, data) {  
//      if (err) {  
//        return console.error(err)  
//      }  
 
//      results[index] = data.toString()  
//      count++  
 
//      if (count === 3) {  
//        printResults()  
//      }  
//    }))  
//  })  
// }  
 
// for (var i = 0; i < 3; i++) {  
//  httpGet(i)  
// }  
