var BinarySearchTree = function(value) {
  // var storage = {};
  var tree = Object.create(BinarySearchTree.prototype);
  tree.root = null;

  // two branches
  // one left branch is less than current value
  // right branch larger than the current value
  return tree;

};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new Node(value);
  console.log(newNode)
  if (this.root === null) {
    this.root = newNode
    return this;
  }

};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function (cb) {

};

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var newTree = new BinarySearchTree(1);
newTree.insert(5);
newTree.insert(10);

//tree.insert(1);


/*
 * Complexity: What is the time complexity of the above functions?
 */
