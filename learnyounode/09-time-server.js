'use strict';

let net = require('net');

let zeroFill = function(str, digits) {
  return (str.length >= digits) ?
    str :
    ('0'.repeat(digits - str.length) + str);
}

let getDate = function() {
  let date = new Date();
  return [  zeroFill(date.getFullYear().toString(), 4),
            '-',
            zeroFill((date.getMonth() + 1).toString(), 2),
            '-',
            zeroFill(date.getDate().toString(), 2),
            ' ',
            zeroFill(date.getHours().toString(), 2),
            ':',
            zeroFill(date.getMinutes().toString(), 2),
            '\n'
          ].join('');
}

let portNum = process.argv[2];

let server = net.createServer(function (socket) {
  socket.end(getDate());
});
server.listen(portNum);
