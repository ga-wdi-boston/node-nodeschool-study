'use strict';
let net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

let server = net.createServer(function(socket) {
  let d = new Date();
  let s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
