/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  while (left <= right) {
    mid = Math.ceil((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right -= 1
    } else {
      left += 1
    }
  }
  if (nums[mid] > target) return mid
  else return mid + 1
};

module.exports = searchInsert