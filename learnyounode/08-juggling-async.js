var http = require('http');
var bl = require('bl');

var first_url = process.argv[2];
var second_url = process.argv[3];
var third_url = process.argv[4];

var result = {
};

var counter = 0;

function print_time (counter, url_number, response) {

  result[url_number] = response;

  if (counter === 3) {
    console.log(result.first_url);
    console.log(result.second_url);
    console.log(result.third_url);
  }
}

http.get(first_url, function callback (response) {
  counter++;
  response.pipe(bl(function (err, data) {
    if (err) { console.error(err); }
    print_time(counter, 'first_url', data.toString());
  }));
});

http.get(second_url, function callback (response) {
  counter++;
  response.pipe(bl(function (err, data) {
    if (err) { console.error(err); }
    print_time(counter, 'second_url', data.toString());
  }));
});

http.get(third_url, function callback (response) {
  counter++;
  response.pipe(bl(function (err, data) {
    if (err) { console.error(err); }
    print_time(counter, 'third_url', data.toString());
  }));
});


//
// OFFICIAL SOLUTION:
// 
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
