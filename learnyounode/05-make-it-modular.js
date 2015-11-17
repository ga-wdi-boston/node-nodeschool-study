function makeItModular(file, filter, callback) {

    var fs = require('fs');
        path = require('path');
        n = 0;
        results = [];

    fs.readdir(file, function(err, data) {
        if (err) {
            return callback(err);
        } else {

        for (i = 0; i < data.length; i++) {

            if (path.extname(data[i]) === "." + filter) {
                results[n] = data[i];
                n++;
            }

            callback(null, results);
        };
        }
    });

}

module.exports = makeItModular;