'use strict';

let net = require('net');
let strftime = require('strftime');

let port = process.argv[2];

function getTimestamp() {
  // create a new Date object
  let d = new Date();
  // format it
  let timestamp = strftime('%Y-%m-%d %H:%M', d);
  timestamp += '\n';
  // return it
  return(timestamp);
}

function listener(socket) {
  let data = getTimestamp();
  socket.write(data);
  socket.end();
}

let server = net.createServer(listener);

server.listen(port);
