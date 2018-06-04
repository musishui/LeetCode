/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return []
  const nL = nums.length
  let res = []
  for (let i = 0; i < nL - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let lastIdx = nL - 1
    for (let j = i + 1; j < nL - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let value = nums[i] + nums[j]
      for (; lastIdx > j; lastIdx--) {
        let sum = value + nums[lastIdx]
        if (sum <= 0) {
          if (sum === 0) {
            res.push([nums[i], nums[j], nums[lastIdx]])
          }
          break
        }
      }
    }
  }
  return res
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
module.exports = threeSum