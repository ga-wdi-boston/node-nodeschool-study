'use strict';

const net = require('net')

function addZero(i) {
  return (i < 10 ? '0' : '') + i
}

function current () {
  let curr = new Date()
  return curr.getFullYear() + '-'
    + addZero(curr.getMonth() + 1) + '-'
    + addZero(curr.getDate()) + ' '
    + addZero(curr.getHours()) + ':'
    + addZero(curr.getMinutes())
}

let server = net.createServer(function (socket) {
  socket.end(current() + '\n')
})

server.listen(Number(process.argv[2]))
