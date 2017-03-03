'use strict';

const net = require('net');

let goal = "2013-07-06 17:42";

const server = net.createServer(function(socket) {
  console.log('client connected');
  socket.on('end', function () {
    console.log('client disconnected');
  });
  let date = new Date()
  let year = (date.getFullYear()).toString();
  let month = (date.getMonth() + 1).toString();
  let day = ((date.getDate()).toString());
  let hours = (date.getHours()).toString();
  let minutes = (date.getMinutes()).toString();

  socket.write(year + '-0' + month + '-0' + day + ' ' + hours + ':' + minutes + '\n');

  // socket.pipe(socket);
  socket.end();
});

server.on('error', (err) => {
  throw err;
});

server.listen(process.argv[2]);
