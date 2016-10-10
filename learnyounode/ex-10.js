'use strict';

const net = require('net');

const server = net.createServer(function(socket) {
  let date = new Date();
  let socket = d.getFullYear()
    + (d.getMonth())
    + (d.getDate());
    + (d.getHours());
    + (d.getMinutes());
  socket.end(socket);
});
console.log(socket);

server.listen(process.argv[2]);
