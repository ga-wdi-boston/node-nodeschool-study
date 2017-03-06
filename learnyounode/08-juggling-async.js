var http = require('http')
var bl = require('bl')
// require files

// set results as empty array
var results = []
// start count at 0
var count = 0

// declare function for printing results and send through for loop
function printResults () {
  for (var i = 0; i < 3; i++)
// console log each results
    console.log(results[i])
}
// declare function to get http
function httpGet (index) {
// get each thrid process from http and take the response
  http.get(process.argv[2 + index], function (response) {
// from the response pipe through the function and set error and data as function arguments
    response.pipe(bl(function (err, data) {
      if (err)
      // if error, the log the error in the console
        return console.error(err)
// if no error, then take the results and set them = data and then turn that into a string
      results[index] = data.toString()
      count++
// once the count gets to 3 then print the results
      if (count == 3)
        printResults()
    }))
  })
}

// set for loop to run through this and run httpGet() function on each
for (var i = 0; i < 3; i++)
  httpGet(i)
