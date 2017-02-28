const net = require('net');

var twoDigits = function(i) {
  if (i<10) {
    return '0'+i;
  }
  else {
    return '' + i;
  }
};

var currentDateTime = function() {
  var date = new Date();
  return date.getFullYear() + '-' + twoDigits(date.getMonth() + 1) + '-' +
  twoDigits(date.getDate())+ ' ' + twoDigits(date.getHours()) + ':' + twoDigits(date.getMinutes()) + '\n';
};

let server = net.createServer( function listener(socket) {
  socket.end(currentDateTime());
});

server.listen(Number(process.argv[2]));
