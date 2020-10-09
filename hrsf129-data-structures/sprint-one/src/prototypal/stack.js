var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
  //implement using Object.create() ~ creates a new object, using an existing object as the prototype
};
var stackMethods = {
  push(value) {
    this.storage[this.count] = value;
    this.storage[this.count++];
  },
  pop() {
    if (this.count === 0) {
      return undefined;
    } else {
      this.storage[this.count--];
      var temp = this.storage[this.count];
      delete temp;
      return temp;
    }
  },
  size() {
    return this.count;
  }
};
