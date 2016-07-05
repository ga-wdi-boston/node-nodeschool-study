'use strict'
// moment = require('moment')
// require('net').createServer(function(socket){
//   socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n')
// }).listen(8000)

let net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

let server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
 
