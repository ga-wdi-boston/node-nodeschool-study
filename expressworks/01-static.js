'use strict';

let express = require('express')
let app = express()

app.use(express.static('public'))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

// app.get('/index.html', function(req, res) {
//   res.end('Hello World!')
// })
app.listen(process.argv[2])
