var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0; // refers to beginning of queue
  someInstance.tail = 0; // refers to end of queue
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.tail] = value;
    this.storage[this.tail++];
    return this.storage[this.tail];

  },
  dequeue() {
    if (this.head - this.tail === 0) {
      return 0;
    } else {
      var oldHead = this.storage[this.head];
      this.storage[this.head++];
    }
    return oldHead;

  },
  size() {
    return this.tail - this.head;

  }
};

//enqueue
queueMethods.enqueue = function(value) {
  if (Object.keys(this.storage) < 1) {
    this.storage[1] = value;
  } else {
    var keyArray = [];
    for (var key in this.storage) {
      keyArray.push(key);
    }
    var n = Math.max(...keyArray);
    this.storage[n + 1] = value;
  }
};
//dequeue
queueMethods.dequeue = function() {
  var keyArray = [];
  for (var key in this.storage) {
    keyArray.push(key);
  }
  var n = Math.min(...keyArray);
  var holder = this.storage[n];
  delete this.storage[n];
  return holder;
};
//size
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
