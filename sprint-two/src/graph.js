

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var k in this.nodes) {
    for (var i = 0; i < this.nodes[k].length; i++) {
      if (this.nodes[k][i] === node) {
        this.nodes[k] = this.nodes[k].splice(0, i).concat(this.nodes[k].splice(i + 1));
        break;
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode] && this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] === undefined) {
    this.nodes[fromNode] = [toNode];
  } else if (!this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].push(toNode);
  }

  if (this.nodes[toNode] === undefined) {
    this.nodes[toNode] = [fromNode];
  } else if (!this.hasEdge(toNode, fromNode)) {
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var deleteIndex = this.nodes[fromNode].indexOf(toNode);
  if (deleteIndex !== -1) {
    this.nodes[fromNode] = this.nodes[fromNode].splice(0, deleteIndex).concat(this.nodes[fromNode].splice(deleteIndex + 1));
  }
  deleteIndex = this.nodes[toNode].indexOf(fromNode);
  if (deleteIndex !== -1) {
    this.nodes[toNode] = this.nodes[toNode].splice(0, deleteIndex).concat(this.nodes[toNode].splice(deleteIndex + 1));  
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.nodes) {
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





