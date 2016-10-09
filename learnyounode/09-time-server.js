// Write a TCP time server!  
   
// Your server should listen to TCP connections on the port provided by the  
// first argument to your program. For each connection you must write the  
// current date & 24 hour time in the format:  
 
//    "YYYY-MM-DD hh:mm"  
 
// followed by a newline character. Month, day, hour and minute must be  
// zero-filled to 2 integers. For example:  
 
//    "2013-07-06 17:42"  
 
// After sending the string, close the connection.  

var net = require('net');

var zeroFill = function(i) {
  if (i < 10) {
    return '0' + i;
  }
  return i;

  // shorter
  // return (i < 10 ? '0' : '') + i  
};

var now = function() {
  var d = new Date();
  return d.getFullYear() + '-' +  
    zeroFill(d.getMonth() + 1) + '-' +  
    zeroFill(d.getDate()) + ' ' +  
    zeroFill(d.getHours()) + ':' +  
    zeroFill(d.getMinutes()); 
};

var server = net.createServer(function (socket) {  
  socket.end(now() + '\n');
});
server.listen(process.argv[2]);