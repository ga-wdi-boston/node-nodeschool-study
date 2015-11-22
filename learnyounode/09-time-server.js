// TCP time server.
var strftime = require('strftime') // not required in browsers
var net = require('net');
var server = net.createServer(function callback (socket) {
  var now = strftime('%F %R', new Date());
  socket.write( now + '\n' );
  socket.end();
});
server.listen(process.argv[2]);


// Every connection received by your server triggers another call to the callback.

// "YYYY-MM-DD hh:mm" //  For each connection you must write the current date & 24 hour time in this format, followed by a newline character.

// socket.write(data) // to write data to the socket
// socket.end() // to close the socket
// // or just
// socket.end(data)
