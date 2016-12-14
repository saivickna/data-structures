var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = undefined;
};

Queue.prototype.enqueue = function(e) {
  this.front = this.front || 0;
  this.storage[this.front + this.size()] = e;
};

Queue.prototype.dequeue = function() {
  if (this.front !== undefined) {
    var res = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    if (this.size() === 0) {
      this.front = undefined;
    }
    return res;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};




