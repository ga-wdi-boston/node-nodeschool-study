var http = require('http');
var dataString = "";
http.get(process.argv[2], function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(input){
        dataString = dataString.concat(input);
    });
    resp.on('end', function(){
        console.log(dataString.length);
        console.log(dataString);
    });
}).on('error', console.error);
