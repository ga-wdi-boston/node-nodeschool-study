'use strict';

// console.log(process.argv);

// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]));

// input, 6 numbers
// node learnyounode/01-baby-steps.js 1 2 3 4 5 6 7 8 9 10

let result = 0;
     // starts at 3rd element because first is node and second is path
     for (let i = 2; i < process.argv.length; i++)
       result += Number(process.argv[i]);

     console.log(result);
