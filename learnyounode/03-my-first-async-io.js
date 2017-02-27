let fs = require('fs');

let content = fs.readFile(process.argv[2],function(err,data){
    if(err){
        console.log('error');
    }
    let lines=data.toString().split('\n');
    console.log(lines.length-1);
});
