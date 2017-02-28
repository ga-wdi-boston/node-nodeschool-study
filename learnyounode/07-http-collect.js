const http = require ('http');
const bl = require('bl')



let callback = function (response) {
  let a =[]
  response = response.setEncoding('utf8');
  response.on("data", (data) =>{
    a.push(data);
    console.log(a)
  });

}

http.get(process.argv[2], callback)
