const mod = require ('./modular.js');

const newTest = function (err, data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

mod.test(process.argv[2], process.argv[3], newTest);
