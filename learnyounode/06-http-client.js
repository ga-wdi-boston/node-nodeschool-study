const http = require ('http');



let callback = function (response) {
  response = response.setEncoding('utf8');
  response.on("data", (data) =>{
    console.log(data);
  });
  response.on("error", (error) =>{
    console.log(error);
  });
  response.on("end", (end) =>{
    console.log(end);
  });
}

http.get(process.argv[2], callback)
