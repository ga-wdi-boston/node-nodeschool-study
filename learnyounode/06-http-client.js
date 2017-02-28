const http = require ('http');



let callback = function (response) {
  response = response.setEncoding('utf8');
  response.on("data", (data) =>{
    console.log(data);
  });

}

http.get(process.argv[2], callback)
