'use strict';

const callback = (dir, ext, errorHandler) => {
  let extLength = ext.length;
  let result = [];

  dir.forEach(function (file) {
    if (file.slice(-extLength) === ext && file !== 'md') {
      result.push(file);
      console.log(file);
    }
  });

  return result;
};

module.exports = callback;
