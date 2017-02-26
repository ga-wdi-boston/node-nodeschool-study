let data = process.argv;

let result = 0;

for (var i = 2; i < data.length; i++) {
  result += Number(data[i]);
}

console.log(result)
