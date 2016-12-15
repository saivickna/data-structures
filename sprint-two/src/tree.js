var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;
  if (target === this.value) {
    return true;
  }

  for (var x = 0; x < this.children.length; x++) {
    result = result || this.children[x].contains(target);
    if (result) {
      return true;
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
