/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const nL = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > target && target >= 0) return nums[0] + nums[1] + nums[2]
  if (nums[nL - 1] < target && target <= 0) return nums[nL - 3] + nums[nL - 2] + nums[nL - 1]
  let res
  let distance = Number.MAX_VALUE
  for (let i = 0; i < nL - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let lastIdx = nL - 1
    for (let j = i + 1; j < nL - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let value = target - nums[i] - nums[j]
      for (; lastIdx > j; lastIdx--) {
        let diff = value - nums[lastIdx]
        if (Math.abs(diff) < distance) {
          distance = Math.abs(diff)
          res = target - diff
          if (diff === 0) {
            return target
          }
        }
        if (diff > 0) {
          break
        }
      }
    }
  }
  return res
};

module.exports = threeSumClosest