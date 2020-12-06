/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let size = map.size
    let has = map.has(n)
    if (size < 2 || has) {
      let count = 0
      if (has) {
        count = map.get(n)
      }
      map.set(n, count + 1)
    } else {
      let keys = map.keys()
      let entries = map.entries()
      for (let [key, value] of entries) {
        if (value === 1) {
          map.delete(key)
        } else {
          map.set(key, value - 1)
        }
      }
    }

  }
  let keys = Array.from(map.keys())
  keys.forEach(key => map.set(key, 0))
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (keys.includes(n)) {
      map.set(n, map.get(n) + 1)
    }
  }
  let m = nums.length / 3
  return keys.filter(key => map.get(key) > m)
};

let nums = [1]
console.log(majorityElement(nums))