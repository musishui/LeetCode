/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  function swap (nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  function permuteRec (start, nums, result) {
    let len = nums.length
    if (start >= len) {
      result.push(nums)
      return
    }
    for (let i = start; i < len; i++){
      if (i > start && nums[i] === nums[start]) continue
      start !==i && swap(nums, start, i)
      permuteRec(start+1, [...nums], result)
    }
  }

  nums.sort((a, b) => a - b)
  let result = []
  permuteRec(0, nums, result)
  return result
};

console.log(JSON.stringify(permuteUnique([1,2,3])))

module.exports = permuteUnique