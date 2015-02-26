'use strict';

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var y = {
  prop1: 'a',
  propObjX: {
    prop2: 1,
    propObjY: {
      prop3: 'c',
      prop4: 2
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

var stringifyJSON = function(input) {
 
  
  if (typeof input === 'object' && input !== null) {
    if (Array.isArray(input)) {
      if (input.length > 0) {
    
      } else {
        return '\'[]\''; 
      }

    } else {
      console.log('obj found!');
      var out = '{';
        for (var key in input) {
          if (stringifyJSON(input[key])) {
            out += stringifyJSON(key) + ":" + stringifyJSON(input[key]) + ",";
          }
        } 
      out += '}';
      return out
    }

  } else if (typeof input === 'string') {

    return '\"' + input + '\"';
  } else if (typeof input === 'boolean' || typeof input === 'number' || input === null) {
    return '' + input;
  } 

};



var run = function() {
  for (var key in testObj) {
    console.log(stringifyJSON(testObj[key]));
  }
}();

// console.log(stringifyJSON(y));



