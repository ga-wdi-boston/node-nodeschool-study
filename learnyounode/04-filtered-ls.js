var fs = require('fs')
var test = undefined
path = process.argv[2]
type = process.argv[3]

function takobaba (path, type){
        fs.readdir(path, function reddir(err, filelist){
        for (i=0; i < filelist.length; i++) {
        ftype = filelist[i].split('.')
        if (ftype[1] == type){
                console.log(filelist[i])
        }
}
})
}

takobaba(path, type)
