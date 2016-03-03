// Use http.get(), provided with three URLs as the first three command-line arguments.  Collect the complete content provided by each of the URLs and print it to the console, one line per URL.
// The CATCH, must print them out in the same order as the URLs are provided as command-line arguments.
// Need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once complete, print the data to the console.  Counting callbacks is one of the fundamental ways of managing async in Node.

var http = require('http');
var collect1 = '';
var collect2 = '';
var collect3 = '';

function read3() {
  http.get(process.argv[4], function (res) {
    res.setEncoding('utf8');
    res.on("data", function (data) {
      collect3 += data;
    });
    res.on("error", function (err) {
      console.log("Sever Error!", err);
    });
    res.on("end", function (end) {
      console.log(collect1);
      console.log(collect2);
      console.log(collect3);
    });
  }); // end http.get 3
};

function read2() {
  http.get(process.argv[3], function (res) {
    res.setEncoding('utf8');
    res.on("data", function (data) {
      collect2 += data;
    });
    res.on("error", function (err) {
      console.log("Sever Error!", err);
    });
    res.on("end", function (end) {
      read3();
    });
  }); // end http.get 2
};

function read1() {
  http.get(process.argv[2], function (res) {  // response listener
    res.setEncoding('utf8');
    res.on("data", function (data) {  // data handler
      collect1 += data;
    });
    res.on("error", function (err) {  // error handler
      console.log("Sever Error!", err);
    });
    res.on("end", function (end) {  // end handler
      read2();
    });
  }); // end http.get 1
};

read1(collect1);
