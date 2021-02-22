/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const res = [1]
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i]
    let max = 1
    for (let j = i; j--;) {
      if (nums[j] < n) {
        max = Math.max(max, res[j] + 1)
      } else if (nums[j] === n) {
        max = Math.max(max, res[j])
        break
      }
    }
    res[i] = max
  }
  return Math.max(...res)
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))