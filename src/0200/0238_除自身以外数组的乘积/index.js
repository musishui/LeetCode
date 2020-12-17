/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  let prefix = 1,
    suffix = 1;
  let ans = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
      ans[i] *=prefix
      ans[len-i-1]*=suffix
      prefix*=nums[i]
      suffix*=nums[len-i-1]
  }
  return ans
};
