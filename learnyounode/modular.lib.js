module.exports = function(dir, valid_extension, cb){
  require('fs').readdir(dir, function(e, files){
    valid_files = []
    if(e) return cb(e)

    for(let i=0; i < files.length; i++){
      let extension_index = files[i].lastIndexOf('.') + 1
      if(!extension_index) continue

      if(valid_extension == files[i].slice(extension_index))
        valid_files.push(files[i])
    }
    cb(null, valid_files)
  })
}
