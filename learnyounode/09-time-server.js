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

var server = net.createServer(function (socket) {  
  var now = new Date();

  var dateElements = [now.getFullYear(), (now.getMonth() + 1), now.getDate(), now.getHours(), now.getMinutes()];

  var dateZeroFilled = dateElements.map(function(el, i) {
    if (el < 10) {
      return '0' + el;
    } 
    return el;
  });

  var nowDate = dateZeroFilled.slice(0, 3);
  var nowTime = dateZeroFilled.slice(3);

  now = nowDate.join('-') + ' ' + nowTime.join(':');

  socket.end(now + '\n');
});
server.listen(process.argv[2]);