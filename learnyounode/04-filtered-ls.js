'use strict';

var fs = require('fs');

fs.readdir(process.argv[2],  function callback (err, list)
    {
      let counter = 0;
      for (let i = 0; i < list.length; i++)
      {
        if (list[i].endsWith(process.argv[3]))
          {
            console.log(list[i]);
            counter++;
            if (counter == 3)
            {
              break;
            }
          }
      }
    }
  );


//
// let str = buf.toString();
//
// let arr = str.split('\n');
//
// console.log(arr.length -1);
