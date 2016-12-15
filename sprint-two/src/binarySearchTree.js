var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.right = null;
  newBinaryTree.left = null;
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (target) {

  if (target >= this.value) {
    if (this.right) {
      this.right.insert(target);  
    } else {
      var newTree = new BinarySearchTree(target);
      this.right = newTree;
    }
    
  } else {
    if (this.left) {
      this.left.insert(target);  
    } else {
      var newTree = new BinarySearchTree(target);
      this.left = newTree;
    }
  }

};

binaryTreeMethods.contains = function (target) {
  if (target === this.value) {
    return true;
  }
  return (Boolean(this.left) && this.left.contains(target)) || (Boolean(this.right) && this.right.contains(target));
};

binaryTreeMethods.depthFirstLog = function (func) {

  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }


};




/*
 * Complexity: What is the time complexity of the above functions?
 */
