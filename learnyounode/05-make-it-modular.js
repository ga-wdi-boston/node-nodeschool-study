'use strict';

const filter = require('./05-module');

filter(directory, extension, (error, list) => {
  if (error) {
    return error;
  }

  list.forEach((filename) => {
    console.log(filename);
  });
});
