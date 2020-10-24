/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.keys = {}
  this.max = 0
  this.min = 1
  this.count = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let { index, value } = this.cache.get(key)
    if (index < this.max) {
      this._delete(key)
      this._set(key, value)
    }
    return value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this._delete(key)
  if (this.count >= this.capacity) {
    while (!this.keys[this.min]) {
      this.min++
    }
    let key = this.keys[this.min]
    this._delete(key)
  }
  this._set(key, value)
};
LRUCache.prototype._delete = function (key) {
  if (!this.cache.has(key)) return false
  let { index } = this.cache.get(key)
  this.cache.delete(key)
  delete this.keys[index]
  this.count--
  if (index === this.max) {
    this.max--
  }
}
LRUCache.prototype._set = function (key, value) {
  this.max++
  this.keys[this.max] = key
  this.cache.set(key, { value, index: this.max })
  this.count++
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let result = []
var cache = new LRUCache(2 );
result.push(cache.put(2, 1))
result.push(cache.put(2, 2));
result.push(cache.get(2));       
result.push(cache.put(1, 1));    
result.push(cache.put(4,1));    
result.push(cache.get(2));       

console.log(result)
