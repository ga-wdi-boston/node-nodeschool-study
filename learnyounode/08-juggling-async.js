'use strict';
let http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let urls = [url1, url2, url3];

let getRequest = function(url){
  http.get(url, function(request) {
    var result = "";
    request.setEncoding("utf8");
    request.on("data", function(data) {
      result += data;
    });
    request.on("end", function() {
      console.log(result);
    });
  });
};

urls.forEach(getRequest);
