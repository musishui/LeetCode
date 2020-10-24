/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.head = new DLink(0)
  this.trail = new DLink(capacity)
  this.head.next = this.trail
  this.trail.prev = this.head

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let { value } = this._delete(key)
    this._add(key, value)
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
  if (this.head.value >= this.trail.value) {
    let lastNode = this.trail.prev
    this._delete(lastNode.key)
  }
  this._add(key, value)
};

LRUCache.prototype._delete = function (key) {
  if (this.cache.has(key)) {
    let node = this.cache.get(key)
    node.prev.next = node.next
    node.next.prev = node.prev
    this.cache.delete(key)
    this.head.value--
    return node
  }
  return null
}

LRUCache.prototype._add = function (key, value) {
  let node = new DLink(value, key)
  node.next = this.head.next
  node.next.prev = node
  this.head.next = node
  node.prev = this.head
  this.cache.set(key, node)
  this.head.value++
  return node
}

var DLink = function (value, key) {
  this.value = value
  this.key = key
  this.prev = this.next = null
}



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let result = []
var cache = new LRUCache(2);
result.push(cache.put(2, 1))
result.push(cache.put(2, 2));
result.push(cache.get(2));
result.push(cache.put(1, 1));
result.push(cache.put(4, 1));
result.push(cache.get(2));

console.log(result)
