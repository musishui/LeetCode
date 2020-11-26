/**
 * 借助快速排序，查找第K大的数
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSelect = (left, right, nums) => {
    if (left >= right) {
      return nums[left]
    }
    let m = left
    let n = right
    let num = nums[m]
    while (m < n) {
      while (nums[n] <= num && n > m) {
        n--
      }
      nums[m] = nums[n]
      while (nums[m] >= num && n > m) {
        m++
      }
      nums[n] = nums[m]
    }
    nums[m] = num
    if (m === k - 1) {
      return num
    } else if (m < k - 1) {
      return quickSelect(m + 1, right, nums)
    } else {
      return quickSelect(left, m - 1, nums)
    }
  }
  return quickSelect(0, nums.length - 1, nums)
};
