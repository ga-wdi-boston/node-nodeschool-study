

var net = require('net');

function putZero ( x ) {
    return ( ( x < 10 ) ? "0" : "") + x;
}

var server = net.createServer( function( socket ) {
  var date = new Date();
  var timedate = date.getFullYear() + "-" + putZero(date.getMonth()+1) + "-" + putZero(date.getDate());
  timedate += " " + putZero(date.getHours()) + ":" + putZero(date.getMinutes());

  socket.write( timedate + "\n" );
  socket.end();
});

server.listen( process.argv[2] );
