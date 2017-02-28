var http = require('http');

http.get(process.argv[2], function (res) {
  var fullText = '';
  res.setEncoding('utf8');
  res.on('data', function (data) {
    fullText += data;
  });
  res.on('end', function () {
    console.log(fullText.length);
    console.log(fullText);
  });
});
