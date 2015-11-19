var net = require('net');
var server = net.createServer(function(socket){
  var nowRaw = new Date();
  function zeroFill(i) {
   return (i < 10 ? '0' : '') + i;
  }

  var nowPretty = nowRaw.getFullYear()+'-'+zeroFill(nowRaw.getMonth()+1)+'-'+zeroFill(nowRaw.getDate())+' '+nowRaw.getHours()+':'+zeroFill(nowRaw.getMinutes());
  socket.end(nowPretty +'\n');
});
server.listen(process.argv[2]);
