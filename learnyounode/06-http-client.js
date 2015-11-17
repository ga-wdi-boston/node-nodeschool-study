


var url = process.argv[2];

// url = "http://powerful-earth-3914.herokuapp.com/plonks";

function callback (response) {

  response.setEncoding("utf8");

  response.on("data", function (data) {
    console.log(data);

   });

  response.on("end", function (data) {
     console.log("")
   });

  response.on("error", function (data) {
     console.log("error")
   });

};

http = require('http');
http.get(url,callback);
