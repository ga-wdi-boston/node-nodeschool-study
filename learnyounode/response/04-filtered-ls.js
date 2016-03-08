// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.
//
//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.
//
//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
//   The fs.readdir() method takes a pathname as its first argument and a
//   callback as its second. The callback signature is:
//
//      function callback (err, list) { /* ... */ }
//
//   where list is an array of filename strings.
//
//   Documentation on the fs module can be found by pointing your browser here:
//   file:///Users/KhanhnhatN/.nvm/versions/node/v4.2.4/lib/node_modules/learny
//   ounode/node_apidoc/fs.html
//
//   You may also find node's path module helpful, particularly the extname
//   method.
//
//   Documentation on the path module can be found by pointing your browser
//   here:
//   file:///Users/KhanhnhatN/.nvm/versions/node/v4.2.4/lib/node_modules/learny
//   ounode/node_apidoc/path.html
//
var fs = require('fs');
var path = require('path');
dirName = process.argv[2];
fileExt = process.argv[3];

  fs.readdir(dirName, function filterList(err, list) {
  if (err) {
    console.log('error');
  };

list.forEach(function(curr){
  if((curr).includes(fileExt) && (curr !== fileExt))
  {
  console.log(curr);
  }
});

});
