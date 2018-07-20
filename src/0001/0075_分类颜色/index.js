/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let idx = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let num = nums[idx]
    if (num === 0) {
      nums.splice(idx, 1)
      nums.unshift(0)
      idx++
    } else if (num === 2) {
      nums.splice(idx, 1)
      nums.push(2)
    } else {
      idx++
    }
  }
};

module.exports = sortColors