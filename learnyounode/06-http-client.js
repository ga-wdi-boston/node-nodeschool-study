http = require('http');

http.get(process.argv[2], (response) => {
  var result = '';
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  });
});
