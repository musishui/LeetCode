/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let arrs = [
    []
  ]
  const len = nums.length

  function fun (arr, start) {
    while (start < len) {
      let temp = [...arr, nums[start]]
      arrs.push(temp)
      if (++start < len) {
        fun(temp, start)
      } 
    }
  }
  fun(arrs[0], 0)
  return arrs
};

module.exports = subsets