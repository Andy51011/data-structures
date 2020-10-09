class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return 0;
    }
    this.count--;
    return this.storage[this.count];
  }
  size() {
    return this.count;
  }
}

// Instatiate an object // runs what ever is inside the constructor
var stack = new Stack();
