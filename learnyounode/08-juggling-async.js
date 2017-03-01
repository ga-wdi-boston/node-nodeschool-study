const http = require('http');

let callback = function(response) {
  let data = ''
  response.setEncoding('utf8');
  response.on('error', console.error);
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    return (data);
  });
};



let multipleUrls = function() {
  let alldata = [];
  let urls = process.argv.slice(2);
  for (let i = 0, max = urls.length; i < max; i++) {
    let data = '';
    http.get(urls[i], (response) => {
      response.setEncoding('utf8');
      response.on('error', console.error);
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        alldata[i] = data;
        console.log(alldata[i])
      });
    })
  }
};

multipleUrls();
