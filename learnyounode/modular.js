var module = require('./module');

module(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log('Error!')
    } else {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        };
    }
})
