'use strict';

let http = require('http');

let urls = process.argv.slice(2);
let results = [];

for (let i = 0; i < urls.length; i++) {
  results[i] = null;
}

for (let i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      let result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        result += data;
      });
      request.on("end", function() {
        results[i] = result;
        let resultCount = 0;
        for (let j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (let j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}
