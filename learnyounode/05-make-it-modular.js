const ls = require('./04-filtered-ls');

ls(process.argv[2], process.argv[3], function(err, data){
    if (err) {
        throw err;
    } else{
        for (let i=0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
});
