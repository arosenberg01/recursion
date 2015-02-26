'use strict';

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {
 
  if (typeof input === 'object' && input !== null) {
    if (Array.isArray(input)) {
      var out = '[';
      input.forEach(function(element, index, array) {
        out += stringifyJSON(element) + ',';
      });
      
      if (out.slice(-1) === ',') {
        out = out.slice(0, out.length-1);
      }
      out += ']';

      return out;

    } else {
      var out = '{';
        for (var key in input) {
          if (stringifyJSON(input[key])) {
            out += stringifyJSON(key) + ":" + stringifyJSON(input[key]) + ",";
          }
        }
      if (out.slice(-1) === ',') {
        out = out.slice(0, out.length-1);
      }
      out += '}';

      return out;
    }

  } else if (typeof input === 'string') {
    return '\"' + input + '\"';
  } else if (typeof input === 'boolean' || typeof input === 'number' || input === null) {
    return '' + input;
  } 

};

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

var run = function() {
  for (var key in testObj) {
    console.log(stringifyJSON(testObj[key]));
  }
};




