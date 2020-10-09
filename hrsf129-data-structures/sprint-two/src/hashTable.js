
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // index [3, ]
  console.log(k, index, this._limit);
  console.log(k, v); // [k, v], [k1, v1], [bob, barker], [bob, seagal] === [bob, seagal]
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

var hash = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
HashTable
._limit: 8
_storage: {
            get: {f}
            set: {f}
            each: {f}
                    }
*/

