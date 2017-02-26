var fs = require('fs');

var content = (error, correct) => {
    console.log(correct.toString().split('\n').length - 1);
};

fs.readFile(process.argv[2], content);
