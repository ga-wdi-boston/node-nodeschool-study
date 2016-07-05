'use strict';
var http = require('http');

var dataObj = {
'data1': '',
'data2': '',
'data3':'',
};

http.get(process.argv[2], function(response) {
  response.on('data', (chunk) => dataObj['data1'] += chunk.toString())
  response.on('end', function() {
      if (dataObj['data1'] && dataObj['data2'] && dataObj['data3']) {
        console.log(dataObj['data1'] + '\n' + dataObj['data2'] + '\n' + dataObj['data3'] );
  };
});
});

http.get(process.argv[3], function(response) {
  response.on('data', (chunk) => dataObj['data2'] += chunk.toString())
  response.on('end', function() {
      if (dataObj['data1'] && dataObj['data2'] && dataObj['data3']) {
        console.log(dataObj['data1'] + '\n' + dataObj['data2'] + '\n' + dataObj['data3'] );
  };
});
});

http.get(process.argv[4], function(response) {
  response.on('data', (chunk) => dataObj['data3'] += chunk.toString())
  response.on('end', function() {
      if (dataObj['data1'] && dataObj['data2'] && dataObj['data3']) {
        console.log(dataObj['data1'] + '\n' + dataObj['data2'] + '\n' + dataObj['data3'] );
  };
});
});
