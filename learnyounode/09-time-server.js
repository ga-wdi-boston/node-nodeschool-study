var net = require('net');

var server = net.createServer(function(socket){
  var date = new Date();
  data = date.getFullYear()+'-'+('0'+(date.getMonth()+1)).slice(-2)+'-'+('0'+ date.getDate()).slice(-2)+' '+date.getHours()+':'+date.getMinutes() + '\n';
  socket.end(data); // close the socket
});
server.listen(process.argv[2]);

/*
# PASS Your solution to TIME SERVER passed!

  Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

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

     var server = net.createServer(function (socket) {
       socket.end(now() + '\n')
     })

     server.listen(Number(process.argv[2]))

 ─────────────────────────────────────────────────────────────────────────────
  You have 3 challenges left. Type 'learnyounode' to show the menu.

~/wdi/study/node-nodeschool-study/learnyounode (master)$

*/
