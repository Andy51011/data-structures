var Stack = function() {

  var someInstance = {};
  // note: last in first out
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0; // count to store values?
  // current number of values;

  // Implement the methods below
  someInstance.push = function(value) { // adds a string to the top of the stack
    storage[count] = value;
    storage[count++];
  };

  someInstance.pop = function() { // remove and return the string on the top of the stack
    // if count === 0 we should return 0 for empty stack
    if (count === 0) {
      return 0;
    } else {
    // decrement the number of stored values
      storage[count--];
    }
    var firstOut = storage[count];
    delete storage[count];
    return firstOut;
  };
  someInstance.size = function() { // return the size of the number in the stack
    return count;
  };

  return someInstance;
};
