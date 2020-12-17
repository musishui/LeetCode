/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const quickSort = (nums, left, right, start, end) => {
    if(nums[left]===nums[right]) return nums[left]
    let base = nums[left]
    let l = left
    let r = right
    while (l < r) {
      while (l < r && nums[r] >= base) {
        r--
      }
      nums[l] = nums[r]
      while (l < r && nums[l] <= base) {
        l++
      }
      nums[r] = nums[l]
    }
    nums[l] = base
    if (base - start < l - left) {
      return quickSort(nums, left, l - 1, start, base - 1)
    } else if (end - base  < right - l) {
      return quickSort(nums, l + 1, right, base + 1, end)
    }
    else {
      return base
    }
  }

  let len = nums.length
  return quickSort(nums, 0, len - 1, 1, len - 1)
};
