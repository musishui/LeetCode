/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort()
  let arrs = [
    []
  ]
  const len = nums.length

  function fun(arr, start) {
    let i = start
    while (i < len) {
      if (i > start && nums[i - 1] === nums[i]) {
        i++
        continue
      }
      let temp = [...arr, nums[i]]
      arrs.push(temp)
      if (++i < len) {
        fun(temp, i)
      }
    }
  }
  fun(arrs[0], 0)
  return arrs
};

module.exports = subsetsWithDup