'use strict';

module.exports = function(dir, ext, callback) {
    var fs = require("fs"),
        path = require("path");

    fs.readdir(dir, function(err, data) {
        if (err)
            return callback(err);
        data = data.filter(function(file) {
            return path.extname(file) === '.' + ext;
        });
        callback(null, data);
    });
};
