/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (!nums.length || k <= 0) return false
  const insert = function (arr, n, left, right) {
    if (arr[left] >= n) {
      return left
    }
    if (arr[right] <= n) {
      return right + 1
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === n) {
      return mid
    } else if (arr[mid] > n) {
      return insert(arr, n, left, mid - 1)
    } else {
      return insert(arr, n, mid + 1, right)
    }
  }
  let arr = [nums[0]]
  let len = k + 1
  for (let i = 1; i <= nums.length - 1; i++) {
    let n = nums[i]
    let arrLen = arr.length
    if (arrLen >= len) {
      let m = nums[i - len]
      if (m === n) {
        continue
      }
      let idx = arr.indexOf(m)
      arr.splice(idx, 1)
      arrLen -= 1
    }
    let idx = insert(arr, n, 0, arrLen - 1)
    arr.splice(idx, 0, n)
    arrLen += 1
    if (idx > 0 && Math.abs(n - arr[idx - 1]) <= t) {
      return true
    }
    if (idx < arrLen - 1 && Math.abs(n - arr[idx + 1]) <= t) {
      return true
    }
  }
  return false
};

let nums = [0, 10, 22, 15, 0, 5, 22, 12, 1, 5], k = 3, t = 3
console.log(containsNearbyAlmostDuplicate(nums, k, t))