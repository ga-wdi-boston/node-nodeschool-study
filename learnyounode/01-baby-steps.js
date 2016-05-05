console.log(process.argv.slice(2,process.argv.length).map((x)=>parseInt(x)).reduce((a,b)=>a+b));
