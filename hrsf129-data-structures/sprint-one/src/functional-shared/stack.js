var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.storedValue = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
//push method
  push(value) {
    this.storage[this.storedValue] = value;
    this.storedValue++;
  },
  // pop method
  pop() {
    this.storedValue--;
    // if more values are removed than expected this.storedValue = zero
    if (this.storedValue < 0) {
      this.storedValue = 0;
    }
    return this.storage[this.storedValue];
  },
  // size method
  size() {
    return this.storedValue;
  }
};




//define push (takes in value. returns nothing)
stackMethods.push = function(value) {
  //if the stack (storage obj) is empty, set the value to storage[1]
  if (Object.keys(this.storage) < 1) {
    this.storage[1] = value;
  } else {
    //else, set the value to storage[n+1] where n represent the highest numeric key
    var keyArray = [];
    for (var key in this.storage) {
      keyArray.push(key);
    }
    var n = Math.max(...keyArray);
    this.storage[n + 1] = value;
  }

};
//define pop (returns popped value)
stackMethods.pop = function() {
  //create holder var for last item (highest numeric key)
  var keyArray = [];
  for (var key in this.storage) {
    keyArray.push(key);
  }
  var n = Math.max(...keyArray);
  var holder = this.storage[n];
  //delete the last key (highest numeric key)
  delete this.storage[n];
  //return holder
  return holder;
};
//define size (returns size)
stackMethods.size = function() {
  //return the size of the storage obj
  return Object.keys(this.storage).length;
};

