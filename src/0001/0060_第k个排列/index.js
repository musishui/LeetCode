/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let counts = [1]
  let nums = [1]
  let result = []
  for (let i = 2; i <= n; i++) {
    counts.push(counts[i - 2] * i)
    nums.push(i)
  }
  k = k - 1
  counts.pop()
  for (let i = 0; i < n - 1; i++) {
    let count = counts.pop()
    let idx = parseInt(k / count)
    result.push(nums.splice(idx, 1)[0])
    k = k % count
  }
  result.push(nums[0])
  return result.join('')
};

module.exports = getPermutation