 //function callback (response)


 http.get(url,function(response){
   response.setEncoding('utf8');
   response.on("error", console.error);
   response.on("data", console.log);

   });
