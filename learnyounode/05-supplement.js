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

/*     var fs = require('fs')
     var path = require('path')

     module.exports = function (dir, filterStr, callback) {

       fs.readdir(dir, function (err, list) {
         if (err)
           return callback(err)

         list = list.filter(function (file) {
           return path.extname(file) === '.' + filterStr
         })

         callback(null, list)
       })
     }

*/
