var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // no need to split branches
  // functional shared methods
  // _.extend
  // this keyword?

  // your code here
  extend(newTree, treeMethods); // copies treeMethods functions into newTree
  newTree.children = [];

  return newTree;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childrenNode = Tree(value);
  this.children.push(childrenNode);
//method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// single node can have multiple values; nested arrays this.children.push(Tree(value))? Ex: this.children[0].push(Tree(value));
// Ex each node can have a subset of nodes defined by their index position
};

treeMethods.contains = function(target) {
  var result = false;
  if (this === null) {
    return null;
  }
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
  //method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  //will need a recursive method to access children
};


/*
 * Complexity: What is the time complexity of the above functions?
 AddChild: O(1) Constant time complexity
 Contains: O(N) Linear time complexity
 */

var uniqueTree = Tree(1);
uniqueTree.addChild(2);
uniqueTree.addChild(3);
uniqueTree.addChild(4);
uniqueTree.contains(4);
