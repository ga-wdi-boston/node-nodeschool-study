'use strict';
let net = require('net');
let myServer = net.createServer(function (socket) {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    socket.write(y + "-0" + m + "-0" + d + " " + hh + ":" + mm + "\n");
    socket.end();
     });
let portNum = process.argv[2];
myServer.listen(portNum);
