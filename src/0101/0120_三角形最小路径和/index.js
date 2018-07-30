/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length == 0) return 0
  let nums = [triangle[0][0]]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = nums.length; j--;) {
      let val = nums[j] + triangle[i][j + 1]
      if (nums[j + 1] == null || val < nums[j + 1]) {
        nums[j + 1] = val
      }
      nums[j] = nums[j] + triangle[i][j]
    }
  }
  return Math.min(...nums)
};
module.exports = minimumTotal