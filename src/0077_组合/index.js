/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  function fun(arr, start, len) {
    if (len === k) return [arr]
    let temp = []
    for (let i = start; i <= n - k + len + 1; i++) {
      let t = fun(arr.concat([i]), i + 1, len + 1)
      temp.push(...t)
    }
    return temp
  }
  let res = []
  for (let i = 1; i <= n - k + 1; i++) {
    let temp = fun([i], i + 1, 1)
    res.push(...temp)
  }
  return res
};

module.exports = combine