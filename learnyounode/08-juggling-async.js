// Use http.get(), provided with three URLs as the first three command-line arguments.  Collect the complete content provided by each of the URLs and print it to the console, one line per URL.
// The CATCH, must print them out in the same order as the URLs are provided as command-line arguments.
// Need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once complete, print the data to the console.  Counting callbacks is one of the fundamental ways of managing async in Node.

var http = require('http');
var collect1 = '';
var collect2 = '';
var collect3 = '';

http.get(process.argv[2], function (res) {
  res.setEncoding('utf8');
  res.on("data", function (data) {
    collect1 += data;
  });
  res.on("error", function (err) {
    console.log("Sever Error!", err);
  });
  res.on("end", function (end) {
  });
}); // end http.get 1

http.get(process.argv[3], function (res) {
  res.setEncoding('utf8');
  res.on("data", function (data) {
    collect2 += data;
  });
  res.on("error", function (err) {
    console.log("Sever Error!", err);
  });
  res.on("end", function (end) {
  });
}); // end http.get 2

http.get(process.argv[4], function (res) {
  res.setEncoding('utf8');
  res.on("data", function (data) {
    collect3 += data;
  });
  res.on("error", function (err) {
    console.log("Sever Error!", err);
  });
  res.on("end", function (end) {
    while (collect1 != '' && collect2 != '' && collect3 != '') {
      console.log(collect1);
      console.log(collect2);
      console.log(collect3);
    }
  });
}); // end http.get 3


