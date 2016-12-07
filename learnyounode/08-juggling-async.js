// This problem is the same as the previous problem (HTTP COLLECT) in that
//   you need to use http.get(). However, this time you will be provided with
//   three URLs as the first three command-line arguments.
//
//   You must collect the complete content provided to you by each of the URLs
//   and print it to the console (stdout). You don't need to print out the
//   length, just the data as a String; one line per URL. The catch is that you
//   must print them out in the same order as the URLs are provided to you as
//   command-line arguments.
//

var http = require('http');

var outputs = [];
process.argv.slice(2).forEach(function(url, index){
  http.get(url, function(resp){
    outputs[index] = "";
    resp.on('data', function(data){
      outputs[index] += data;
    });
  });
  resp.on('end', all_requests_complete_mark);
});
});

var finished_requests = 0;
function all_requests_complete_mark (){
  finished_requests++
  if(finished_requests !== outputs.lenght) { return }

  outputs.forEach(function(output){
    console.log(output)
  })
}
