'use strict';

 let net = require('net');


 function zeroFill(num) {
   return (num < 10 ? '0' : '') + num
 };

 let server = net.createServer(function (socket) {
  let date = new Date();
  let result = '';
  console.log(date.getFullYear())
  result = result + zeroFill(date.getFullYear()) + '-';
  result = result + zeroFill(date.getMonth() + 1) + '-';
  result = result + zeroFill(date.getDate()) + ' ';
  result = result + zeroFill(date.getHours()) + ':';
  result = result + zeroFill(date.getMinutes()) + '\n';
  socket.end(result);
});

server.listen(process.argv[2]);
