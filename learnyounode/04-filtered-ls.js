var fs = require('fs');
fs.readdir(process.argv[2], function(err, list){
  if (err) console.log(err)
    list.forEach(function(file) {
      if (file.split('.')[1] === process.argv[3])
        console.log(file);
    });
})
