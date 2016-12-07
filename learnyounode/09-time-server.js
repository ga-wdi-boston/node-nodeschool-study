var net = require('net')
var server = net.createServer(function (socket) {
  var date = new Date();
  var month = function(date) {
    if(Number(date.getMonth()) < 10) {
      return '0' + (date.getMonth() + 1);
    }
    else {
      return date.getMonth() + 1;
    }
  };
  var day = function(date) {
    if(Number(date.getDate()) < 10) {
      return '0' + date.getDate();
    }
    else {
      return date.getDate();
    }
  };

  var hour = function(date) {
    if(Number(date.getHours()) < 10) {
      return '0' + date.getHours();
    }
    else {
      return date.getHours();
    }
  };

  var minute = function(date) {
    if(Number(date.getMinutes()) < 10) {
      return '0' + date.getMinutes();
    }
    else {
      return date.getMinutes();
    }
  };


  var data = date.getFullYear() + '-' + month(date) + '-' + day(date) + ' ' + hour(date) + ':' + minute(date) + '\n';
  socket.write(data);
  socket.end();
})
server.listen(process.argv[2]);
