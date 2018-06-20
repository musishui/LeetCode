/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (maxIdx < i) return false
    maxIdx = Math.max(maxIdx, i + nums[i])
  }
  return true
};

module.exports = canJump