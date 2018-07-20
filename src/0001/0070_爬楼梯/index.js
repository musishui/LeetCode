/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function calcStep (m, n) {
    let sum = n + m
    m = Math.min(m, n)
    if (m === 0) return 1

    let y = m
    let x = sum
    for (i = 1; i < m; i++) {
      y *= i
      x *= (sum - i )
    }
    return x / y
  }
  let result = 0
  for (let i = n, j = 0; i>=0; i -= 2, j += 1){
    result +=calcStep(i, j)
  }
  return result
};
climbStairs(7)
module.exports = climbStairs