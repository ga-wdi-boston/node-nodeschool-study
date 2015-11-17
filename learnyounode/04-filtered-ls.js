var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  var fileList = list.filter(function(filename){
    var fileExt = filename.split('.').pop();
    // console.log(filename);
    return fileExt === process.argv[3];
    });
  fileList.forEach(function(fname){
    if (fname === process.argv[3]) {
      console.log("");
    } else {
      console.log(fname);
    };
  });
});


//   stringArray = [ 'CHANGELOG.md',
//   'LICENCE.md',
//   'README.md',
//   'api.html',
//   'dat',
//   'data.dat',
//   'data.json',
//   'learnyounode.dat',
//   'learnyounode.sql',
//   'learnyounode.txt',
//   'md',
//   'w00t.dat',
//   'w00t.txt',
//   'words.dat',
//   'wrrrrongdat' ];

// extFilter(stringArray, "dat", cb);
