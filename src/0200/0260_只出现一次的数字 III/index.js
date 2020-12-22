/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    temp = temp ^ nums[i]
  }
  let bit = temp & (-temp)
  let m = 0, n = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & bit) {
      m = m ^ nums[i]
    }
  }
  n = temp ^ m
  return [m, n]
};
