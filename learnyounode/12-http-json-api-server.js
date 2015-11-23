http = require('http')
url = require('url')


var renderJson = function(req, res){

 req.on('data', function(data){
  console.log(data)
   var reqUrl =  url.parse(req.url, true)
   var pathname = reqUrl.pathname
   var query = reqUrl.query
   console.log(query)
   var hours, minutes, seconds
   var time = {}
   res.writeHead(200, { 'Content-Type': 'application/json' })
   if (pathname === '/api/parsetime'){
    var isoTime = query.iso.split('T')[1].split(':')
    hours = isoTime[0];
    minutes = isoTime[1];
    seconds = isoTime[2].split('.')[0]
    time[hours] = hours;
    time[minutes] = minutes;
    time[seconds] = seconds;
   }
   else if(pathname === '/api/unixtime'){
    var unix_timestamp = query.unixtime
    var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    time[hours] = hours;
    time[minutes] = minutes.substr(-2);
    time[seconds] = seconds.substr(-2);
   }
 }).pipe(res)
}

var server = http.createServer(renderJson)

server.listen(process.argv[2])
