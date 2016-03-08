// var http = require('http');
// var dataString = "";
// var urlArray = [process.argv[2], process.argv[3], process.argv[4]];
//
// function process(url) {
// http.get(url, function(resp) {
//     resp.setEncoding('utf8');
//     resp.on('data', function(input){
//         dataString = dataString.concat(input);
//     });
//     resp.on('end', function(){
//         console.log(dataString.length);
//         console.log(dataString);
//     });
// }).on('error', console.error);
// }
//
// urlArray.forEach(process);

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;
function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i]);
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            results[index] = data.toString();
            count++;
            if (count == 3) // yay! we are the last one!
                printResults();
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}
