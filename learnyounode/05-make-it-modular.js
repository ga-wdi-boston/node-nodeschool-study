var filter = require('./05-supplement.js');

filter(process.argv[2], process.argv[3], function(err, data) {
    data.forEach(function(file){
        console.log(file);
    });
});
