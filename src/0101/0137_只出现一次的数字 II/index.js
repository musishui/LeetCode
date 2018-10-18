/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map()
  for (let i = nums.length; i--;) {
    let val = 1
    if (map.has(nums[i]) && (val=map.get(nums[i])+1) == 3) {
      map.delete(nums[i])
    } else {
      map.set(nums[i], val)
    }
  }
  return map.keys().next().value
};

module.exports = singleNumber