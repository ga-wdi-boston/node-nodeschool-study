'use strict';

const sum = function () {
  let count = 0;
  for (let i = 2; i < (process.argv).length; i++) {
    let num = Number((process.argv)[i]);
    count += num;
  };
  console.log(count);
};

sum();
