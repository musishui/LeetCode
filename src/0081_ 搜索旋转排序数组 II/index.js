/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return split(0, nums.length - 1) >= 0

  function split(left, right) {
    if (left > right) return -1
    let m = Math.ceil((left + right) / 2)
    if (nums[m] === target) return m
    if (nums[left] < nums[m]) {
      if (target >= nums[left] && target < nums[m]) {
        return findIdx(left, m - 1)
      }
      return split(m + 1, right)
    } else if (nums[m] < nums[right]) {
      if (target > nums[m] && target <= nums[right]) {
        return findIdx(m + 1, right)
      }
      return split(left, m - 1)
    } else {
      let idx = split(left, m - 1)
      if (idx < 0) {
        idx = split(m + 1, right)
      }
      return idx
    }

  }

  function findIdx(left, right) {
    while (left <= right) {
      let m = Math.ceil((left + right) / 2)
      if (nums[m] === target) return m
      else if (nums[m] > target) {
        right = m - 1
      } else {
        left = m + 1
      }
    }
    return -1
  }
};

module.exports = search