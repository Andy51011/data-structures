var Queue = function(storage, head, tail) {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  if (this.tail - this.head === 0) {
    return 0;
  } else {
    var previous = this.storage[this.head];
    this.head++;
    return previous;
  }

};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

var queue = new Queue();


