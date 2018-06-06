/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = []
  let len = nums.length
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let ii = i + 1
    for (let j = ii; j < len - 2; j++) {
      if (j > ii && nums[j] === nums[j - 1]) continue
      let sum1 = nums[i] + nums[j]
      let left = j + 1
      let right = len - 1

      while (left < right) {
        let sum = sum1 + nums[left] + nums[right]
        if (sum > target) {
          while (left < right && nums[right] === nums[--right]) {}
        } else if (sum < target) {
          while (left < right && nums[left] === nums[++left]) {}
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[++left]) {}
          while (left < right && nums[right] === nums[--right]) {}
        }
      }
    }
  }
  return res
};


module.exports = fourSum