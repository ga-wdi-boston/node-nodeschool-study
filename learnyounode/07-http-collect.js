'use strict';
var http = require('http');

http.get(process.argv[2], function(response) {
  let data = '';
  response.on('data', (stuff) => data += stuff);
  response.on('end', () => console.log(data.length + '\n' + data));
});
