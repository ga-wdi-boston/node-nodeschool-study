const http = require ('http');

let callback = function (response) {
  let data = ''
  response = response.setEncoding('utf8');
  response.on('error', console.error);
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    console.log(data.length)
    console.log(data);
  });
  };



http.get(process.argv[2], callback);
