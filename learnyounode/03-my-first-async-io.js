var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) return;
  var str = data.toString().split("\n").length;
  str -= 1;
  console.log(str);
});
