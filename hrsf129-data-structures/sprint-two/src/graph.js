

// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push into nodeList
  this.nodeList[node] = {};

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // for loop to check if node is present in nodeList
  for (var key in this.nodeList) { // loop over nodeList
    if (key === String(node)) { // check every iteration in list if node exists
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for loop to check if node exists
  for (var key in this.nodeList) {
    if (key === String(node)) {
      delete this.nodeList[key];
      return true;
    }
  }
  return false;
  // if true, remove element from nodeList and all associated edges(arcs)
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //console.log(this.nodeList)
  if (this.contains(fromNode) === true && this.contains(toNode) === true) { //checks if fromNode is in nodeList
    var edges = this.nodeList;
    for (var key in edges[fromNode]) {
      if (key === String(toNode)) {
        return true;
      }
    }
  }
  return false;

  //   console.log(key)
  //   if (key === fromNode) {
  //     for (var i = 0; i < this.nodeList[key].length; i++) {
  //       console.log(i)
  //       if (this.nodeList[key][i] === toNode) {
  //         return true;
  //       }
  //     }
  //   }

  // return false;
};

// {1: {2:2,4:4}, 2: {1:1}, 3: {4:4}, 4: {1:1, 3:3}}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edges = this.nodeList;
  edges[fromNode][toNode] = toNode;
  edges[toNode][fromNode] = fromNode;

  //creates a pointer(reference) fromNode pointing toNode
  //should push all references into this.fromNode array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find the fromNode and delete specified edge
  //find the toNode and delete specified edge
  var edges = this.nodeList;
  delete edges[fromNode][toNode];
  delete edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
    cb(key);
  }
};

//define newGraph with 'new'
var NewGraph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


NewGraph.addNode(2);
NewGraph.addNode(1);
NewGraph.addNode(3);
NewGraph.addEdge(3, 2);
NewGraph.hasEdge(3, 2); //should be true
NewGraph.hasEdge(3, 1); //should be false
