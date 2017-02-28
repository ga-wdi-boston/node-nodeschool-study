const fs = require('fs');
const path = process.argv[2];
const ext = process.argv[3];
let regex = new RegExp("\\." + ext + "$");

fs.readdir(path, function(err, files) {
  if (err) return console.log();

  files.forEach(function(file) {
    if (regex.test(file)) {
      console.log(file);
    }
  });
});


// var fs = require('fs');
// module.exports = function(dirname, filter, callback) {
// 	var reg = new RegExp('\\.' + filter + '$');
// 	fs.readdir(dirname, function (err, list) {
// 		if (err)
// 			return callback(err);
// 		var ret = [];
// 		list.forEach(function(file) {
// 			if (reg.test(file))
// 				ret.push(file);
// 		})
// 		return callback(null, ret);
// 	});
// };
