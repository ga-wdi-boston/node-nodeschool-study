const fs = require('fs');

let name = fs.readFile(process.argv[2], (err, data) => {
    if(err){
      console.log(err);
    }
    let number = data.toString().split('\n');
    let result = 0;


    number.forEach(function(word){
      result += 1;
    })

    console.log(result -1);


});
