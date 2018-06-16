/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = []
  let bit = 0
  if (a.length > b.length) {
    let temp = a
    a = b
    b = temp
  }
  let m = a.length-1
  let n = b.length-1
  while (m >= 0 || bit) {
    let sum = (+a[m] || 0) + (+b[n] || 0) + bit
    bit = sum > 1 ? 1 : 0
    sum = sum > 1 ? sum - 2 : sum
    result.unshift(sum)
    m--
    n--
  }
  result.unshift(b.substr(0, n+1))
  return result.join('')
};

module.exports = addBinary