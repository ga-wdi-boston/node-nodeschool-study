var net = require('net');

var portNumber = process.argv[2];

function connectionListener (socket) {
  var date = new Date();
  console.log(date.getHours());

  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());
  var year = String(date.getFullYear());
  var month = String(date.getMonth() + 1);
  var date = String(date.getDate());

  if(month < 10){
    month = '0' + month;
  }

  if(date < 10){
    date = '0' + date;
  }

  if(hour < 10){
    hour = '0' + hour;
  }

  if(minutes < 10){
    minutes = '0' + minutes;
  }

  var data = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + '\n';

  socket.write(data);
  socket.end();
};

var server = net.createServer(connectionListener);
server.listen(portNumber);
