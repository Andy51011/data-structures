var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me  // overall {item: item}  {some: some}
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //takes a string
  //should place item into the set
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  // see if key values are present
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.contains(item) === true) {
    delete this.storage[item];
    return true;
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
new Set = {
  storage: {},
  add: {f},
  contains: {f},
  remove: {f}
}
*/