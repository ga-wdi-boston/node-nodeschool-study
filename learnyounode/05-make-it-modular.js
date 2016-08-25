var fs = require('fs');

module.exports = function (dirName, extName, callback) {

fs.readdir(process.argv[2], function(err, list){

  if(err){
    callback(err);
  }

  // passing third argument
  var ext = process.argv[3];



  // creates array with all array elements that pass a test in function(e) function
  var answer = list.filter(function(e){

   // set lenght is === to ext lentht +1, so we will have  period '.'
    var len = ext.length+1;
    // substring extracts characters from a string
    // if the element ends with the same extension return true or false
       return(e.substring(e.length-len, e.length) === '.' + ext);
  });

  answer.forEach(function(e){
    console.log(e);
  });
});

};
