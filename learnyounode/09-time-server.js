'use strict'

let net = require('net')
let date = new Date()

let server = net.createServer(function (socket) {
  // socket handling logic
  if ((date.getMonth()+1<10)&&(date.getDate()+1<10)) {
    let timestring = date.getFullYear()+"-0"+ (date.getMonth()+1) +"-0"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n"
    socket.write(timestring)
    socket.end()
  }else{
    let timestring = date.getFullYear()+"-"+ (date.getMonth()+1) +"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n"
    socket.write(timestring)
    socket.end()
  }
})
server.listen(process.argv[2])
