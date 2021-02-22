/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = 1
  let arr = [null, nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > arr[len]) {
      len += 1
      arr[len] = nums[i]
    } else {
      let left = 1
      let right = len
      let pos = 0
      while (left <= right) {
        let mid = (left + right) >> 1
        if (arr[mid] < nums[i]) {
          pos = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      arr[pos + 1] = nums[i]
    }
  }
  return len
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))