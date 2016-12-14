var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var front = undefined;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    front = front || 0;
    storage[front + someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    if (front !== undefined) {
      var result = storage[front];
      delete storage[front];
      front++;
      if (someInstance.size() === 0) {
        front = undefined;
      }
      return result;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
