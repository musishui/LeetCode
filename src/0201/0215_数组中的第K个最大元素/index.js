/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = []
  let prev = {
    index: 0,
    value: null
  }
  const sort = (n) => {
    let len = arr.length
    let index = 0
    if (len) {
      if (n >= prev.value) {
        index = insertSort(n, 0, prev.index - 1)
      } else {
        let end = len - 1
        index = insertSort(n, Math.min(prev.index + 1, end), end)
      }
    }
    arr.splice(index, 0, n)
    prev.index = index
    prev.value = n
  }
  const insertSort = (n, start, end) => {
    let index
    if (n >= arr[start]) {
      index = start
    } else if (n <= arr[end]) {
      index = end + 1
    } else {
      let mid = Math.floor((end + start) / 2)
      if (arr[mid] === n) {
        index = mid
      } else if (arr[mid] < n) {
        index = insertSort(n, start, mid - 1)
      } else {
        index = insertSort(n, mid + 1, end)
      }
    }
    return index

  }
  for (let i = 0; i < nums.length; i++) {
    sort(nums[i])
    if (arr.length > k) {
      arr.pop()
    }
  }
  return arr.pop()
};
