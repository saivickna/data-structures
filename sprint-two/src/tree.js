var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  tree.parent = this;
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

treeMethods.removeParent = function() {
  var parentTree = this.parent;
  for (var x = 0; x < parentTree.children.length; x++) {
    if (parentTree.children[x].value === this.value) {
      parentTree.children = parentTree.children.slice(0, x).concat(parentTree.children.slice(x + 1));
    }
  }
  this.parent = null;
};

treeMethods.bfs = function(func) {
  var q = new Queue();
  q.enqueue(this);
  //func(this.value);

  while (q.size()) {
    var node = q.dequeue();
    func(node.value);
    for (var x = 0; x < node.children.length; x++) {
      q.enqueue(node.children[x]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
