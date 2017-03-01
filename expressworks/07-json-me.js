var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  var file = process.argv[3];

  var promiseReadFile = function(fileName) {
    return new Promise(function(resolve, reject) {
      fs.readFile(fileName, { encoding: 'utf-8' },function(err, data){
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  };

  var convertToJSON = function(fileData) {
    return JSON.parse(fileData);
  };

  var sendJSON = function(json) {
    res.json(json);
  };

  var handleError = function(err) {
    res.status(err.status).json({ erorr: err });
  };

  promiseReadFile(file)
    .then(convertToJSON)
    .then(sendJSON)
    .catch(handleError);
});

app.listen(process.argv[2]);
