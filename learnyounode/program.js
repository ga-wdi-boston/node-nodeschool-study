
// const sayHello = function () {
//   console.log('HELLO WORLD')
// }
//
// sayHello()

// let result = 0
//
// for (let i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
//
// console.log(result)

const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)
