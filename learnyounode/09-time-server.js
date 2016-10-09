'use strict';
let net = require('net');

let server = net.createServer(function listener(socket) {
  let date = new Date();
  let dateTime = new Map([['year', date.getFullYear()], ['month', date.getMonth()+1], ['day', date.getDate()], ['hours', date.getHours()], ['minutes', date.getMinutes()]]);
  
  dateTime.forEach(function(value, key){
    console.log('value: '+ value + ' key: ' + key);
    if (value.toString().length < 2) {
      this.set(key, '0' + value);
    }
  }, dateTime);
  socket.end(dateTime.get('year') + '-' + dateTime.get('month') + '-' + dateTime.get('day') + ' ' + dateTime.get('hours') + ':' + dateTime.get('minutes') + '\n');
});
server.listen(process.argv[2]);
