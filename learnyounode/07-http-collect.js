
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res){
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    if (err) {
      return console.err(err);
    }

    var dataChucks = data.toString();
    console.log(dataChucks.length);
    console.log(dataChucks);
  }));
  // res.on('data', function (data) {
  //   console.log(data);
  // });
}).on('error', function(e){
  console.log("Got error: " + e.message);
});


/*
var http = require('http')
   var bl = require('bl')

   http.get(process.argv[2], function (response) {
     response.pipe(bl(function (err, data) {
       if (err)
         return console.error(err)
       data = data.toString()
       console.log(data.length)
       console.log(data)
     }))
   })  
*/
