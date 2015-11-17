var sum = function sum() {
	var results = 0;
	
  	for (var i = 2; i < process.argv.length; i++) {
    	results += Number(process.argv[i]);
  	}
  console.log(results);
};

sum();