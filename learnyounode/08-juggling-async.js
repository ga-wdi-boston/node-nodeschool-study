'use strict';

let http = require('http');
let urls = process.argv.slice(2);
let data = [];

let responseNum = 0;

for (let i = 0; i < urls.length; i++) {
  data[i] = null;
};

for (let i = 0; i < urls.length; i++) {
  (function (i) {
    http.get(urls[i], function (request) {
      let result = "";
      request.setEncoding('utf8');
      request.on('data', function (data) {
        result += data;
      });
      request.on('end', function () {
        data[i] = result;
        let resultCount = 0;
        for (let n = 0; n < data.length; n++) {
          if (data[n] != null) resultCount++;
        }
        if (resultCount == data.length) {
          for (let n = 0; n < data.length; n++) {
            console.log(data[n]);
          }
        }
      });
    });
  })(i);
}
