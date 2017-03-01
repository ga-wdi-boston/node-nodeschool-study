var http = require('http');

recurse(process.argv[2], function () {
  recurse(process.argv[3], function () {
    recurse(process.argv[4]);
  });
});


function recurse (url, cb) {
 http.get(url, function (res) {
  var fullText = '';
  res.setEncoding('utf8');
  res
  .on('data', function (data){
    fullText += data;
  })
  .on('end', function () {
    console.log(fullText);
    if (cb) cb();
  });
 });
}
