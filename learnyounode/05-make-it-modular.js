var filter_files = require('./module.js');

// first arg - directory name
// second arg = extension filter

filter_files(process.argv[2], process.argv[3], function callback(err, data){
  if (err) {
    console.log(err);
    return;
  }

  data.forEach(function(line){
    console.log(line);
  });
});
