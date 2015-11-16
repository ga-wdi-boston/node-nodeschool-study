net = require('net');

// .createServer calls the callback every time a connection is made

var server = net.createServer(function(socket){
  //socket handling
  date = new Date()
  var year = date.getFullYear()
  var rawMonth= date.getMonth()     // starts at 0
  var rawDate = date.getDate()      // returns the day of month
  var hours = date.getHours()
  var minutes = date.getMinutes()

  var getMonth = function(rawMonth){
    month = rawMonth + 1
    if (rawMonth < 10)
      return '0' + month
    else
      return '' + month
  }
  var month = getMonth(rawMonth);

  var getDate = function(rawDate){
    date = rawDate
    if (rawDate < 10)
      return '0' + date
    else
      return '' + date
  }

  var date = getDate(rawDate)

  dateString = year + "-" + month + "-" + date +" " + hours + ":" + minutes

  socket.end(dateString)
})
server.listen(process.argv[2]);
