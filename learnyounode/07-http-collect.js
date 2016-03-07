'use strict';

let bl = require('bl');
let http = require('http');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
      console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
  }));
});
