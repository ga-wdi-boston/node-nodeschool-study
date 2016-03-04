var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback){

    fs.readdir(directory, function (err, filelist) {
        if (err) {
            return callback(err);
        }

        var data = filelist.map(function (file) {
            if ( path.extname(file) === '.' + ext ) {
                return file;
            }
        });

        data = data.filter(function(item){
            if ( item ) return item;
        });

        callback(null, data);
    });

};
