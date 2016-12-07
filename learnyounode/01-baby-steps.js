var arg = process.argv;

// console.log(process.argv);

// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]));

// input, 6 numbers
// node learnyounode/01-baby-steps.js 1 2 3 4 5 6 7 8 9 10

var result = 0;
     // starts at 3rd element because first is node and second is path
     for (var i = 2; i < arg.length; i++)
       result += Number(arg[i]);

     console.log(result);
