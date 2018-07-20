/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length
  let n = len <= 1 ? len : 1
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[n] = nums[i]
      n++
    }
  }
  return n
};

module.exports = removeDuplicates