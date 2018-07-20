/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashObj = {}
  for (let len = nums.length; len--;){
    let other = target - nums[len]
    if (hashObj[other]) {
      return [len, hashObj[other]]
    } else {
      hashObj[nums[len]]=len
    }
  }
};