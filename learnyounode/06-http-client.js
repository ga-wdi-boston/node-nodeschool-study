'use strict';

let fs = require('fs')
let http = require('http')
let url = process.argv[2]

http.get(url, (response) => {
  response.on("data", (data) => {
    console.log(decodeURIComponent(data));
  })
}  );
