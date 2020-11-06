/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let bit = 0
  while (m !== n) {
    bit ++
    m = m >> 1
    n = n >> 1
  }
  return m << bit
};

console.log(rangeBitwiseAnd(2,3))