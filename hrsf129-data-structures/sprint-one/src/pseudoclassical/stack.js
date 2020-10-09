var Stack = function(storage, count) {
  this.storage = {};
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create storage obj
  this. storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function () {
  if (this.count === 0) {
    return 0;
  } else {
    // var temp = this.storage[this.count];
    this.storage[this.count--];
    return this.storage[this.count];
  }

};

Stack.prototype.size = function () {
  return this.count;
};

var stack = new Stack();


//prototype pop
Stack.prototype.pop = function() {
  var arr = [];
  for (var key in this.storage) {
    arr.push(key);
  }
  var n = Math.max(...arr);
  var holder = this.storage[n];
  delete this.storage[n];
  return holder;
};
//prototype size
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
//new var for new stack
var NewStack = new Stack();
