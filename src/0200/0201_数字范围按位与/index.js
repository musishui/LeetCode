/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let bit = 0
  while (m !== n) {
    let diff = n - m 
    let i = 0
    while (diff > 0) {
      diff = diff >> 1
      i++
    }
    bit += i
    m = m >> i
    n = n >> i
  }
  return m << bit
};

console.log(rangeBitwiseAnd(5,8))