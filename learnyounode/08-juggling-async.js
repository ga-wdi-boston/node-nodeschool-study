
'use strict';



var http = require('http'),  //standard require the server provided
    feed = [],            //you are going to want an array for the three results of strings, so you can keep them in order.
    count = 0,  //you are dealing with a fixed number of responses and need to keep track of them, essentially counting them
    url = process.argv.slice(2);  //I understand why slicing out the results makes sense, but not .slice(2)

function print() {  //we need a function that tells us what to do when the get request is finished.
    count += 1;  //we have to count the strings
    if (count === feed.length) {
        feed.forEach( function (value) {
            console.log(value);
        });  //this if statement is saying check to see if the length of the array is the length of the counter, and if it is, run the forEach function on the feed array and console.log that value.
    }
}

url.forEach(function (value, index) {
    feed[index] = '';  //start at the beginning of the array.
    http.get(value, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            feed[index] += data;
        });
        response.on('end', allDone);
    });
});


//__________________HERE"S THE OFFICIAL ANSWER

     var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0
     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }
     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)
