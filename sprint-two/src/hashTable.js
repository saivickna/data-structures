

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numElements = 0;
};

HashTable.prototype.rehash = function() {
  var tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._numElements = 0; //will be updated by subsequent this.insert calls
  var tempArray = [];
  tempStorage.each.call(this, function(value, key, collection) {
    if (value !== undefined) {
      for (var x = 0; x < value.length; x++) {
        tempArray.push([value[x][0], value[x][1]]);
        //this.insert(value[x][0], value[x][1]);
      }
    }

  });
  for (var x = 0; x < tempArray.length; x++) {
    this.insert(tempArray[x][0], tempArray[x][1]);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arr = this._storage.get(index);
  if (arr === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var x = 0; x < arr.length; x++) {
      if (arr[x][0] === k) {
        arr[x][1] = v;
        this._storage.set(index, arr);
        return;
      }
    }
    arr.push([k, v]);
    this._storage.set(index, arr);
  }
  this._numElements++;
  if (this._numElements >= this._limit * 0.75) {
    this._limit = this._limit * 2;
    this.rehash();
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if (arr === undefined) {
    return undefined;
  }
  for (var x = 0; x < arr.length; x++) {
    if (arr[x][0] === k) {
      return arr[x][1];
    }
  }
  //return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);

  for (var x = 0; x < arr.length; x++) {
    if (arr[x][0] === k) {
      arr = arr.splice(0, x).concat(arr.splice(x + 1));
      this._storage.set(index, arr);
      this._numElements--;
      if (this._numElements < this._limit * 0.25) {
        this._limit = this._limit / 2;
        this.rehash();
      }
      return;
    }
  }
  // this._storage.each(function(value, key, collection) {
  //   if (key === index) {
  //     collection[key] = undefined;
  //   }
  // });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


