sumNum = function(array) {
  return array.reduce(function(pV, cV) {
    return parseInt(pV) + parseInt(cV);
  })
};


// sumNum(readLine(/\s/));

// console.log(sumNum(process.argv.splice(0,2)));

console.log(sumNum(process.argv.slice(2,this.length)));
