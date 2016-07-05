'use strict';
let http = require('http');
let bl = require('bl');
let server1 = process.argv[2];
let server2 = process.argv[3];
let server3 = process.argv[4];
http.get(server1, (res) => {
  res.pipe(bl((err, data) => {
    let all = data.toString();
    console.log(all);
    http.get(server2, (res) => {
      res.pipe(bl((err, data) => {
        let all = data.toString();
        console.log(all);
        http.get(server3, (res) => {
          res.pipe(bl((err, data) => {
            let all = data.toString();
            console.log(all);
          }))
        })
      }))
    })
  }))
})
