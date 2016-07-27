'use strict';
 var fs = require('fs');
 var path = require('path');
 fs.readdir(process.argv[2], function(err, list) {
   var fileList = list.filter(e => (path.extname(e) === '.' + process.argv[3]))
   console.log(fileList.join('\n'));
 });
