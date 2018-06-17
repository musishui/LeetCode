/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let sum = m + n - 2
  n = Math.min(m, n) - 1
  let num = 1
  let result = 1
  for (; n >= 1; n--) {
    num *= n
    result *= (sum - n + 1)
  }
  return result / num
};

module.exports = uniquePaths