// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var search = function(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
    	var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
    		if (child.classList.contains(className)) {
			    results.push(child);
        }
        search(child);
      }  
    }	
  };

  search(document.documentElement);

  return results;
};
