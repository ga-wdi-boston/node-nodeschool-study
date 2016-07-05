var http = require('http');

var urls = [ process.argv[2], process.argv[3], process.argv[4] ]

var allData = ['', '', ''];

var resultsReturned = 0;

function appendResults (data){
  allData[resultsReturned] += data.toString();
}

function printResults(){
  resultsReturned += 1;
  if(resultsReturned === 3){
    console.log(allData[0]);
    console.log(allData[1]);
    console.log(allData[2]);
  } else {
    http.get(urls[resultsReturned], callback);
  }
};

function callback (response){
  response.on('data', appendResults);
  response.on('end', printResults);
};

http.get(urls[0], callback);
