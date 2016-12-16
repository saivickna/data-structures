var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new DoublyNode(value);
    if (this.head === null) {
      
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

  };

  list.addToHead = function(value) {
    var node = new DoublyNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

  };

  list.removeHead = function() {
    if (this.head !== null) {
      var val = this.head.value;
      if (this.head.next !== null) {
        this.head.next.previous = null;  
      }
      this.head = this.head.next;
      return val;
    }
  };

  list.removeTail = function() {
    if (this.head !== null) {
      var val = this.tail.value;
      if (this.tail.previous !== null) {
        this.tail.previous.next = null;
      }
      this.tail = this.tail.previous;
      return val;
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

var DoublyNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
