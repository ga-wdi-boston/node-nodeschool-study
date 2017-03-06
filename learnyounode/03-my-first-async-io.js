var fs = require('fs');

fs.readFile(process.argv[2],(_err, data) => {
  console.log(data.toString().split('\n').length-1);
});
