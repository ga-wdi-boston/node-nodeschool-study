'use strict';
let http = require('http');
let bl = require('bl');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function (err, data) {
    if(err){
      console.log(err);
    }
    console.log(data.length);
    console.log(data.toString());
}));
});
