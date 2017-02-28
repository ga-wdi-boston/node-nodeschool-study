const net = require('net');

let server = net.createServer(function(socket){
    function numberToFormattedString(number) {
        if (number<10) {return '0' + number.toString()
      } else {
        return number.toString();
      }
    }

    let date = new Date();
    const year = numberToFormattedString(date.getFullYear());
    const month = numberToFormattedString((date.getMonth() + 1));
    const day = numberToFormattedString(date.getDate());
    const hour = numberToFormattedString(date.getHours());
    const minute = numberToFormattedString(date.getMinutes());
    socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n');
});

server.listen(parseInt(process.argv[2]));
