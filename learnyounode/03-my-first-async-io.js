var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function callback (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(data.split('\n').length - 1);
});
