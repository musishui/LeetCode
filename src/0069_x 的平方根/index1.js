/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let m = 0
  let n = x
  while (m < n) {
    let half = Math.ceil((m + n) / 2)
    let product = half * half
    if (product > x) {
      n = half-1
    } else if (product < x){
      m = half
    }else {
      return half
    }
  }
  return m
};

mySqrt(80)

module.exports = mySqrt