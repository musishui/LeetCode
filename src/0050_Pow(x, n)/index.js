/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (x === 0 || x === 1 || n === 1) return x
  let flag = n < 0 ? -1 : 1
  n = n * flag
  let y = 1

  while (n > 1) {
    if (n % 2 === 1) {
      y *= x
    }
    n = parseInt(n / 2)
    x *= x
  }
  x *=y
  return flag === 1 ? x : 1.0 / x
};

console.log(myPow(8.84372, -5))
module.exports = myPow