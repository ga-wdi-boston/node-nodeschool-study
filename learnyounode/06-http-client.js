// Load the http core module
var http = require('http');

// Get data input from the console
var url = process.argv[2];

// Print each item to the console from a given data set
var printEach = function printEach(list) {
  list.forEach(function(item) {
    console.log(item);
  });
};

// Execute a 'get' request
// Takes a URL and a callback as arguments
http.get(url, function(response) {
  var stuff = [];
  response.setEncoding('utf8');
  response.on('data', function(data) {
    stuff.push(data);
  });
  response.on('end', function() {
    stuff.forEach(function(thing) {
      console.log(thing);
    });
  });
});
