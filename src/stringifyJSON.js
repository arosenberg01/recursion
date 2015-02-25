'use strict';

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var y = {
  prop1: 'a',
  propObjX: {
    prop2: 'b',
    propObjY: {
      prop3: 'c',
      prop4: 'd'
    }
  }
};

var testObj = {
  num: 3,
  string: 'Hello world',
  bool: true,
  none: null,
  undef: undefined,
  func: function() { return 3; },
  arr: [1, 2],
  emptyArr: [],
  emptyObj: {},
  obj: y
};

var stringifyJSON = function(input, accumulator) {
  if (accumulator === undefined) {
    accumulator = '';
  }
  
  if (typeof input === 'object' && input !== null) {
    if (Array.isArray(input)) {
      if (input.length > 0) {
        // console.log(input + ' = array');

        // var front = '[';
        // var back = ']'

        // for (var i = 0; i < input.length; i++) {
        //   return stringifyJSON(input[i], accumulator)
        // }
      } else {
        accumulator += '\'[]\''; 
      }

    } else {
      if (Object.keys(input).length > 0) {
        for (var key in input) {
          if (typeof input[key] === 'object') {
            console.log('nested obj');
            return stringifyJSON(input[key], accumulator);
          } else {
            accumulator += key + ' -- ' + input[key] + ', ';
            console.log('Accum-in: ' + accumulator);
          }
        }
      } else {
        accumulator += '\'{}\''; 
      }
    }

  } else if (typeof input === 'string') {
    var result = '\'\"' + input + '\"\'';
    console.log(input + ' (' + typeof input + ')' + ' to ' + result + ' (' + typeof result + ')' );
    accumulator += ' ' + result + ' ';

  } else if (typeof input === 'boolean' || typeof input === 'number' || input === null) {
    var result = '\'' + input + '\'';
    console.log(input + ' (' + typeof input + ')' + ' to ' + result + ' (' + typeof result + ')' );
    accumulator += ' ' + result + ' ';
  } else {
    console.log (input + ' = ???');
  } 

  return accumulator;
};



var run = function() {
  for (var key in testObj) {
    console.log(stringifyJSON(testObj[key]));
  }
}();





