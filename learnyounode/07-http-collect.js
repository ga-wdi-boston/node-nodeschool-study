const http = require('http');
const url = process.argv[2];

http.get(url, function (response) {
  let data = '';
  let contentLength = 0;

  response.on('data', function (chunk) {
    contentLength += Buffer.byteLength(chunk.toString());
    data += chunk.toString();
  });

  response.on('end', function () {
    console.log(contentLength);
    console.log(data);
  });
});
