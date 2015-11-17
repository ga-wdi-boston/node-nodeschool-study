var mymodule = require("./mymodule.js");

  var dirName = process.argv[2];
  var extension = process.argv[3];

mymodule(dirName, extension, function(err, matches){
  if (err) {
    console.error("There was an error");
  } else
    matches.forEach(function(file) {
      console.log(file);
    });
  });
