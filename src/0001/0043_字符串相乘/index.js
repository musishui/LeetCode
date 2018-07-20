/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  if (num1.length < num2.length) {
    let tmp = num1
    num1 = num2
    num2 = tmp
  }
  let sum = []
  for (let i = num2.length, k = 0; i--; k++) {
    sum[k] || (sum[k] = 0)
    let n = +num2[i]
    if (n === 0) continue
    let bit = 0
    for (let j = num1.length, m = 0; j--; m++) {
      let tmp = n * num1[j] + bit + (sum[m + k] || 0)
      bit = Math.floor(tmp / 10)
      tmp = tmp % 10
      sum[m + k] = tmp
    }
    if (bit) {
      sum[num1.length + k] = (sum[num1.length + k] || 0) + bit
    }
  }

  return sum.reverse().join('')
};

module.exports = multiply