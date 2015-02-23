// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var x = {
	prop1: "val1",
	prop2: "val2"
}

var y = {
	prop3: "val3",
	prop4: {
		prop4a: "val4a",
		prop4b: "val4b"
	}
}

var stringifyJSON = function(input, accumulator) {
  if (accumulator === undefined) {
  	accumulator = "";
  }
  
  console.log("Accum-out: " + accumulator);

  (function() {
	  if (Array.isArray(input)) {

	  } else if (input === 'undefined') {
	  } else if (input === "FUNCTION") {
	  } else {
	  	for (var key in input) {
	  		
	  		if (typeof input[key] === 'object') {
	  			console.log('nested obj');
	  		  return stringifyJSON(input[key], accumulator);
	  		} else {
	        accumulator += "" + input[key] + " ";
          console.log("Accum-in: " + accumulator);
	  		}
	  	}
	  }

  })();

 return accumulator;
};



// console.log("Return: " + stringifyJSON(x));
console.log("Return: " + stringifyJSON(y));