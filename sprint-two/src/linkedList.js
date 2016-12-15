var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null) {
      
      this.head = node;
      this.tail = node;
    } else {
      var curNode = this.head;
      this.tail.next = node;
      this.tail = node;
    }

  };

  list.removeHead = function() {
    if (this.head) {
      var node = this.head.value;
      this.head = this.head.next;
      return node;
    }
  };

  list.contains = function(target) {
    var curNode = this.head;
    while (curNode) {
      if (target === curNode.value) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
