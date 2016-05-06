
var filter = require('./05-module');

filter(process.argv[2], process.argv[3], function (err, content) {
  if (err)
    return console.error("There was an error processing the operation: ", err);

  else
    content.forEach(function (item) {
      console.log(item);
    });
});



// var mymodule = require('./05-module');
// mymodule(process.argv[2], process.argv[3], function(err, results) {
//   if (err) {
//     console.log('App is sickly: ', err);
//   }
//
//   results.forEach(function(item) {
//     console.log(item)
//   });
// });
