

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var y = {
	prop1: "a",
	prop2: {
		prop3: "b",
		prop4: {
			prop5: "c",
			prop6: "d"
		}
	}
}

var num = 3;
var string = "Hello world";
var bool = true;
var none = null;
var undef = undefined;
var func = function() { return 3 };


var testObj = {
	num: 3,
	string: "Hello world",
	bool: true,
	none: null,
	undef: undefined,
};

var testArr = [num, string, bool, none, undef, func];

var stringifyJSON = function(input, accumulator) {
  if (accumulator === undefined) {
  	accumulator = "";
  }
  
  // console.log("Accum-out: " + accumulator);

	if (Array.isArray(input)) {

	} else if (input === 'undefined') {

	} else if (typeof input === 'object') {
  	for (var key in input) {
  		
  		if (typeof input[key] === 'object') {
  			console.log('nested obj');

  		  return stringifyJSON(input[key], accumulator);
  		} else {
        accumulator += key + " -- " + input[key] + ", ";
        console.log("Accum-in: " + accumulator);
  		}
  	}
  } else {
  	accumulator += "" + input;
  }
  
 return accumulator;

};


var stringifyTest = function(input, accumulator) {
  if (accumulator === undefined) {
  	accumulator = '';
  }

  if (typeof input === 'boolean') {
    console.log(input + ' = boolean');
  } else if (typeof input === 'string') {
  	console.log(input + ' = string');
  } else if (typeof input === 'number') {
  	console.log(input + ' = number');
  } else if (input === null) {
  	console.log(input + ' = null');
  } else if (input === undefined) {
  	console.log(input + ' = undefined');
  } else if (Array.isArray(input)) {
  	console.log(input + ' = array');
  } else if (typeof input === 'function') {
  	console.log(input + ' = function');
  } else {
  	console.log (input + ' ?= An object?');
  }
};






// console.log("Return: " + stringifyJSON(y));

for (var i = 0; i < testArr.length; i++) {
	// console.log('' + testArr[i] + ' = ' + stringifyTest(testArr[i]));
	stringifyTest(testArr[i]);
}

