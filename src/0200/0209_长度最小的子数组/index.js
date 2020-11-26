/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let start = 0;
  let sum = 0;
  let min = 0;
  let n;
  for (let i = 0, l = nums.length; i < l; i++) {
    sum += nums[i];
    while (sum > s) {
      n = sum - nums[start];
      if (n >= s) {
        sum = n;
        start += 1;
      } else {
        break;
      }
    }
    if (sum >= s) {
      n = i - start + 1;
      min = min === 0 ? n : Math.min(min, n);
    }
    if (min === 1) {
      break;
    }
  }
  return min;
};
