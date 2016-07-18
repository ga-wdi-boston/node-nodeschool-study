var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var allData1 = '';
var allData2 = '';
var allData3 = '';

function appendResults1 (data){
  allData1 += data.toString();
}

function appendResults2 (data){
  allData2 += data.toString();
}

function appendResults3 (data){
  allData3 += data.toString();
}

function printResults(){
  if(allData1 && allData2 && allData3){
    console.log(allData1);
    console.log(allData2);
    console.log(allData3);
  }
};

function callback1 (response){
  response.on('data', appendResults1);
  response.on('end', printResults);
};

function callback2 (response){
  response.on('data', appendResults2);
  response.on('end', printResults);
};

function callback3 (response){
  response.on('data', appendResults3);
  response.on('end', printResults);
};

http.get(url1, callback1);
http.get(url2, callback2);
http.get(url3, callback3);
