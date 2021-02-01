/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  let result = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    let num = Math.max(result[i - 1], result[i - 2] + nums[i])
    result[i] = num
  }
  return result.pop()
};
