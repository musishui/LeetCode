/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (!nums.length || k <= 0) return false
  const getID = (x, w) => {
    return Math.floor(x < 0 ? (x + 1) / w - 1 : x / w)
  }

  let map = new Map()
  let w = t + 1
  for (let i = 0; i < nums.length; i++) {
    let m = getID(nums[i], w)
    if (map.has(m)) {
      return true
    }
    if (map.has(m - 1) && Math.abs(nums[i] - map.get(m - 1)) < w) {
      return true
    }
    if (map.has(m + 1) && Math.abs(nums[i] - map.get(m + 1)) < w) {
      return true
    }
    map.set(m, nums[i])
    if (i >= k) {
      map.delete(getID(nums[i - k], w))
    }
  }
  return false
};

// let nums = [0, 10, 22, 15, 0, 5, 22, 12, 1, 5], k = 3, t = 3
let nums = [2147483647, -1, 2147483647],
  k = 1,
  t = 2147483647
console.log(containsNearbyAlmostDuplicate(nums, k, t))