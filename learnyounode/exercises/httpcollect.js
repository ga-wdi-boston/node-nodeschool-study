var http = require('http');

var url = process.argv[2];

var allData = '';

function appendResults (data){
  allData += data.toString();
}

function printResults(){
  console.log(allData.length);
  console.log(allData);
};

function callback (response){
  response.on('data', appendResults);
  response.on('end', printResults);
};

http.get(url, callback);
