/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let getMin = (start, end, k, n) => {
    let min = Math.max(start, n - (end + end - k + 2) * (k - 1) / 2)
    if (min <= end - k + 1) return min
    else return false
  }

  let getMax = (start, end, k, n) => {
    let max = Math.min(end, n - (start + start + k - 2) * (k - 1) / 2)
    if (max >= start + k - 1) return max
    else return false
  }

  let fn = (start, end, k, n) => {
    if (k === 1) {
      if (n >= start && n <= end) return [[n]]
      else return []
    }
    let min = (start + start + k - 1) * k / 2
    let max = (end + end - k + 1) * k / 2
    if (n < min || n > max) return []
    start = getMin(start, end, k, n)
    if (!start) return []
    end = getMax(start, end, k, n)
    if (!end) return []

    let nums = []

    for (let i = 0, loop = end - start + 1 - k; i <= loop; i++) {
      let arrs = fn(start + i + 1, end, k - 1, n - (start + i))
      if (arrs.length) {
        arrs.forEach(arr => arr.unshift(start + i))
        nums.push(...arrs)
      }
    }
    return nums
  }

  return fn(1, 9, k, n)
};
