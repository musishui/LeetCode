/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length
  let n = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[n] = nums[i]
      n++
    }
  }
  return n
};

module.exports = removeElement