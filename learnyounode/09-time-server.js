var net = require('net');

var server  = net.createServer(function(socket){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var data = year + '-' + month + '-' + day + ' ' + hours + ":" + minutes;
  socket.end(data + '\n');
});

server.listen(process.argv[2]);

