var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};
// implement queueMethod ex enqueue to add at the end of the queue
var queueMethods = {
  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  // function called dequeue to remove from the front of the head or queue
  dequeue() {
    if (this.head - this.tail === 0) {
      return undefined;
    }
    var oldHead = this.storage[this.head];
    this.storage[this.head++];
    delete oldHead;
    return oldHead;

  },
  // size of the queue tail - head;
  size() {
    return this.tail - this.head;

  }
};

/* test */
// var queue = Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue('c');
// queue.enqueue('d');
// queue.enqueue('e');
// queue.enqueue('f');

//define all the queueMethods
//enqueue
queueMethods.enqueue = function(value) {
  //if 'this' object is empty, then set the first key as 1 equal to the value
  if (Object.keys(this.storage).length < 1) {
    this.storage[1] = value;
  } else {
    //else, set the key as n+1 with n representing the hightest numeric key
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
  //store the oldest value in 'this',
  var keyArray = [];
  for (var key in this.storage) {
    keyArray.push(key);
  }
  var n = Math.min(...keyArray);
  var store = this.storage[n];
  //delete the oldest,
  delete this.storage[n];
  //return the stored value.
  return store;

};
//size
queueMethods.size = function() {
  //return the size of 'this' object (number of keys)
  return Object.keys(this.storage).length;
};


//Do:
//Work within the src/functional-shared/ folder
//Create an object that holds the methods that will be shared by all instances of the class
//Use the keyword this in your methods
//Use _.extend  to copy the methods onto the instance