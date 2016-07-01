let numbers = process.argv.slice(2)
let sum = 0
for(let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i])
}
 console.log(sum)
