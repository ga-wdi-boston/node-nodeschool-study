var net = require('net');

var server = net.createServer(function (socket) {
  var date = new Date();
  var day = [date.getFullYear(), (date.getMonth() + 1).length === 2 ? (date.getMonth() + 1) : [0, (date.getMonth() + 1)].join(''), date.getDate()];
  var time = [date.getHours(), date.getMinutes()];
  var dateFormat = day.join('-') + ' ' + time.join(':') + '\n';

  socket.end(dateFormat);
});

server.listen(process.argv[2]);

// BETTER SOLUTION
// var net = require('net')
//
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
