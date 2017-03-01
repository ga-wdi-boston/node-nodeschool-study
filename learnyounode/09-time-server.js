const net = require('net');

let port = process.argv[2];

const getDate = function () {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  if (month < 10) {
    month = '0' + (month + 1);
  }
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let hour = date.getHours();
  if (hour < 10) {
    hour = '0' + hour;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n';
};

let server = net.createServer(function listener(socket) {
  socket.write(getDate());
  socket.end();
});

server.listen(port);
