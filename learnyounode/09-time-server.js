// Use the net module from Node core which has all the basic networking functions
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// Net module has a method named net.createServer() that takes a function
// The function that you need to pass to net.createServer() is a
// connection listener that is called more than once.
var server = net.createServer(function (socket) {
// The socket object contains a lot of meta-data regarding the connection,
// but it is also a Node duplex Stream, in that it can be both read from, and
// written to.
  socket.end(now() + '\n')
})

// net.createServer() also returns an instance of your server. You must call
// server.listen(portNumber) to start listening on a particular port.
server.listen(Number(process.argv[2]))
