'use strict'

let net = require('net');
let date = new Date();

let zeroFill = function(number) {
  return number < 10 ? '0' + number : number
}

let server = net.createServer(function(socket) {
  let data = date.getFullYear() + '-' + zeroFill(date.getMonth() + 1) + '-' + zeroFill(date.getDate()) + ' ' + zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes()) + '\n'
  socket.end(data);
})

server.listen(Number(process.argv[2]));
