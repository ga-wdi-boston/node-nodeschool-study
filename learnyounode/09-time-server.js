'use strict';

let net = require('net')

let formatNum = function (num) {
  return num < 10 ? "0" + num : num;
};

let currentTime = function () {
  let current = new Date();
  return [current.getFullYear(),
    formatNumber(current.getMonth() + 1),
    formatNumber(current.getDate())].join("-") + " " + [formatNumber(current.getHours()),
    formatNumber(current.getMinutes())].join(":");
};

let server = net.createServer(function (socket) {
  socket.end(currentTime() + '\n');
});

server.listen(8000);
