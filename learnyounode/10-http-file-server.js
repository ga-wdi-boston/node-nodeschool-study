http = require('http')
fs = require('fs')

callback = function(request, response){
  if(request)
    var file = fs.createReadStream(process.argv[3])
    file.pipe(response)

}

var server = http.createServer(callback)

server.listen(process.argv[2])
