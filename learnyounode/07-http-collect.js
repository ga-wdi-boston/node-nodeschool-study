// http.get request.  Collect all data from the server and write two lines to the console.
// Line One -- An integer representing the number of characters received from the server.
// Line Two -- Contain the complete String of characters sent by the server.


var http = require('http');
http.get(process.argv[2], function callback (response) {
  var tangle = '';
  response.setEncoding('utf8');
  response.on("data", function dataListener (data) {
    tangle += data;
  });
  response.on("error", function errorListener (err) {
    console.log("Sever Error!", err);
  });
  response.on("end", function endListener (end) {
    console.log(tangle.length);
    console.log(tangle);
  });

}); // end http.get
