let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data){
  let count = data.toString().split("\n").length;
  if (count > 0) count -= 1;
  console.log(count);
});
