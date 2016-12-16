var Trie = function() {
  var trie = {};
  trie.root = Node();
  trie.t9Map = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'};

  trie.addWord = function (value, node, depth) {
    if (node.value === value) {
      node.isWord = true;
      return;
    }
    var curPrefix = value.substring(0, depth + 1);
    var curPrefixNode = node.children[curPrefix];
    if (curPrefixNode !== undefined) {
      this.addWord(value, curPrefixNode, depth + 1);
    } else {
      var newNode = Node(curPrefix);
      node.children[curPrefix] = newNode;
      this.addWord(value, newNode, depth + 1);
    }
    
  };

  trie.contains = function (value, node, depth) {
    var result = false;
    if (node.value === value && node.isWord) {
      return true;
    } else {
      var curPrefix = value.substring(0, depth + 1);
      var curPrefixNode = node.children[curPrefix];
      if (curPrefixNode === undefined) {
        return false;
      } else {
        return result || this.contains(value, curPrefixNode, depth + 1);
      }
    }
  };
  trie.t9FirstWord = function (node) {
    if (node.isWord) {
      return node.value;
    } else {
      for (var x = 0; x < 26; x++) {
        var childNode = node.children[node.value + String.fromCharCode(97 + x)];
        if (childNode !== undefined) {
          return this.t9FirstWord(childNode);
        }
      }
      
    }
  };
  trie.t9Prediction = function (value, node, depth, parent) {
    if (value.length === parent.length) {
      return this.t9FirstWord(node);
    }
    var mapItems = this.t9Map[value[depth]];
    for (var x = 0; x < mapItems.length; x++) {
      var childNode = node.children[parent + mapItems[x]];
      if (childNode !== undefined) {
        return this.t9Prediction(value, childNode, depth + 1, parent + mapItems[x]);
      } 
    }

  };
  return trie;
};



var Node = function(value) {
  var node = {};
  node.value = value;
  node.isWord = false;
  node.children = {};
  return node;
};