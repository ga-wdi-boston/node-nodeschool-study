
var fs = require('fs');
function buff (callback) {
  fs.readFile(process.argv[2], (err,data)=>{
   if (err) throw err;
   var str = data.toString().split('\n');
   var num = str.length;
   callback(num);

 });
}




const print = function(number){
  console.log(number -1);
};

buff(print);
