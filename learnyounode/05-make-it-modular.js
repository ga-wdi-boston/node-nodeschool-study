const mod = require ('./modular.js');

let dirPath = process.argv[2];
let extension = process.argv[3];

mod(dirPath, extension, (err, list) =>{
  if (err) {
    console.error(err);
    return;
  }

  list.forEach((filename)=>{
    console.log(filename);
  });
});
