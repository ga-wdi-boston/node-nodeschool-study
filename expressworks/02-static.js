const path = require('path');
const express = require('express');
const app = express();
// require appropriate files


// use express package and static method on process.argv[3] or join the directory with public
app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));

// have express watch for process.argv[2]
app.listen(process.argv[2]);
