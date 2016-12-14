var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storage: {}, front: undefined};
  _.extend(someInstance, queueMethods);
  // Use an object with numeric keys to store values
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


