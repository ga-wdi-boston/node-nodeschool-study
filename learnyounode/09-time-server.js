var net = require('net');
var port = process.argv[2];

var formatDate = function(date) {
  var year = date.getFullYear() + '-';
  var month = date.getMonth() + 1;
  var day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '\n';

  if (month < 10) {
    month = '0' + month + '-';
  }

  return year + month + day + hour + minute;
};

var server = net.createServer(function (socket) {
  var date = new Date();
  var formattedDate = formatDate(date);

  socket.end(formattedDate);
});

server.listen(port);
