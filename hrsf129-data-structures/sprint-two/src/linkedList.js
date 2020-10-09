var LinkedList = function() {
  var list = {};
  var storage = {};
  list.head = null;
  list.tail = null;
  // something keep track the length of list
  list.counter = 0;

  list.addToTail = function(value) {
    // create a new Node value;
    var newNode = Node(value);
    //if head or tail is null -> head and/or tail = value
    if (!list.head) {
      list.head = newNode; // {3} head
      list.tail = list.head;
    } else {
      // set the new tail to value
      list.tail.next = newNode; // {0, 1, 3} // next value is equal to null;
      list.tail = newNode;
      //increment the counter
      list.counter++;
      // var n = list.counter; // n = 1
      // storage[n] = list.tail.next;
      // list.tail = newNode; // <--- new value {3}
    }
  };
  list.removeHead = function() {
    //check if head exists
    // set new node to head.next
    // set current head to new node
    // decrement length
    // return head.value
    if (list.head) {
      var temp = list.head; // {0}   // list = {head: 0, value: 0, next: 1}
      list.head = list.head.next; // {0, 1, 3}
      //delete temp;
    }
    list.counter--;
    return temp.value;
    // var keyArray = []; // []
    // for (var key in storage) {
    //   keyArray.push(key); // [head, 1, tail] ["1", "2"];
    // }
    // var n = Math.min(...keyArray);
    // var prior = list.head; // {3, 2, 4} "current value = null"
    // list.head = storage[n];
    // delete storage[n];

    // return prior;
  };
  //similar to queue. if no head, return null
  //else reassign next value as new head return prior head


  list.contains = function(target) {
    // for (var key in list) {
    //   if (list[key] === target)
    // }
    if (list.head.value === target ) {
      return true;
    } else if (list.tail.value === target) {
      return true;
    } else {
      return false;
    }

    // checking if this value exists
    // return a boolean
  };

  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

