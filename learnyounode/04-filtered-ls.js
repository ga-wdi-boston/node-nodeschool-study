var fs = require('fs');
fs.readdir(process.argv[2], function(err, list){
  if(err) throw err;
  var ext = process.argv[3];
  var answer = list.filter(function(element){
    var len = ext.length+1;
    return (element.substr(element.length-len, element.length) === '.' + ext);
  });
  answer.forEach(function(e){
    console.log(e);
  });
});
