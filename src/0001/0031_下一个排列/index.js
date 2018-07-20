/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length
  if (len <= 1) return 
  let i = len - 1
  for (; i--;) {
    if (nums[i + 1] > nums[i]) {
      break;
    }
  }
  const swap = (l, r) => {
    let temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
  }
  let m = len - 1
  let n = i + 1
  if (i > -1) {
    let num = nums[i]
    for (let j = m; j > i; j--) {
      if (num < nums[j]) {
        swap(i, j)
        break
      }
    }
  }

  for (; n < m; n++, m--) {
    swap(m, n)
  }
};


module.exports = nextPermutation