'use strict';

let http = require('http');

let urlAry = process.argv.slice(0,2);

const getUrls = function(urlAry) {
  // console.log("Get Urls Called", urlAry.length);
  if (urlAry.length > 0) {
    http.get(urlAry.shift(), function(response) {
      printStream(response, urlAry);
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  } else {
    // console.log("No more URLs");
  }
}

const printStream = function(response, urlAry) {
  // console.log("PrintStream Called", urlAry.length);
  let collector = "";
  response.setEncoding('utf8').on("data", function(data) {
    collector += data;
  }).on('end', () => {
    console.log(collector);
    getUrls(urlAry);
  });
};

getUrls(urlAry);
