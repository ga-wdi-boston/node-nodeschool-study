const fs = require('fs');
const http = require('http');
var net = require('net')
let path1 = process.argv[2];
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

let wholeYear = year + "-" +"0"+ month + "-" +"0"+day + " " + hour + ":" + minute






  var server = net.createServer(function (socket) {
    let data = wholeYear;
    socket.end(data + '\n');
  });
  server.listen(path1);
