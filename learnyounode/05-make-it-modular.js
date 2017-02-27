var doWork = require('./modular');

var printFiles = function (err, files) {
  if (err) {
    return err;
  }

  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
};

doWork(process.argv[2], process.argv[3], printFiles);
