'use strict';

let fs = require('fs');

let filteredList = function(directory, extension, callback) {
  fs.readdir(directory, callback) {
    if (err) throw err;
    for (let i = 0; i < list.length; i++) {
      if (list[i].search(`.${extentions}`) !== -1) {
        console.log(`${list[i]}`);
      }
    }
  });
};

modules.export: {
  filteredList
}
