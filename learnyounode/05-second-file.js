'use strict';

var readfile = require('./05-make-it-modular.js');

readfile(process.argv[2], process.argv[3], function(err, data) {
    if (err) console.log(err);
    data.map(function(x) {
        console.log(x);
    });
});
