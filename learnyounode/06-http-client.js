
var http = require('http');

http.get(process.argv[2], function(res){
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
}).on('error', function(e){
  console.log("Got error: " + e.message);
});

/*official answer
# PASS Your solution to HTTP CLIENT passed!

  Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')

     http.get(process.argv[2], function (response) {
       response.setEncoding('utf8')
       response.on('data', console.log)
       response.on('error', console.error)
     })
*/
