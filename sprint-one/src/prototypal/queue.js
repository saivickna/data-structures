var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = undefined;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.front = this.front || 0;
    this.storage[this.front + this.size()] = value;
  },

  dequeue: function() {
    if (this.front !== undefined) {
      var result = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      if (this.size() === 0) {
        this.front = undefined;
      }
      return result;
    }
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


