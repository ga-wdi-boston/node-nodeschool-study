var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.pipe(bl((err, data) => {
    console.log(data.toString());
    //missing
  }));

})
.on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
