class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0; // first person in queue
    this.tail = 0; // last person in queue;
  }
  enqueue(value) {
    if (value) {
      this.storage[this.tail] = value;
      this.storage[this.tail++];
    }
  }
  dequeue() {
    if (this.tail - this.head === 0) {
      return 0;
    } else {
      var previous = this.storage[this.head];
      this.storage[this.head++];
      return previous;
    }

  }
  size() {
    return this.tail - this.head;
  }

}

var queue = new Queue();
