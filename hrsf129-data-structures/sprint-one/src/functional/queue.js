var Queue = function() {
  var someInstance = {};
  // fifo method
  // Use an object with numeric keys to store values
  var storage = {};
  // create a empty stored variable
  var head = 0; // beginning of the queue
  var tail = 0; // end of the queue
  // Implement the methods below
  someInstance.enqueue = function(value) {
    // increment tail since it is the last of the queue
    if (value) {
      storage[tail] = value;
      tail++;
    }

  };

  someInstance.dequeue = function() {
    if (head - tail === 0) {
      return undefined;
    }
    // remove at the front of the queue and increment head [1, 2, 3, 4] --> [2, 3, 4]?
    var removeHead = storage[head];
    head++;
    // removes oldest item
    delete removeHead;
    return removeHead;

  };

  someInstance.size = function() {
    // difference of tail and head to get the size of the queue
    return tail - head;
  };
  return someInstance;
};