var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (e) {
  this.storage[this.size()] = e;
};

Stack.prototype.pop = function() {
  var res = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return res;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


