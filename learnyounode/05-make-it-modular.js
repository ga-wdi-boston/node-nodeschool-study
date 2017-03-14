const filerFn = require('./05-make-it-modular-filter.js');
const dir = process.argv[2];
const filterStr = process.argv[3];


// need to use the filter function from the file
filterFn(dir, filterStr, function (err, list) {
// if there is an error, show the message and that error in the console
  if (err)
  return console.error('There was an error:', err);

// if there is no error, then in the list, for each piece, log the file in the console
  list.forEach(function (file) {
    console.log(file);
  });
});
