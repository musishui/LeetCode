/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let nums = []
  while (true) {
    nums.unshift(x % 100)
    x = Math.floor(x / 100)
    if (x <= 0) {
      break
    }
  }
  let result = 0
  
  for (let i = 0; ; i++) {
    let temp = i * i
    if (temp >= nums[0]) {
      result = temp===nums[0]?i:i-1
      break
    }
  }
  let remain = nums[0] - result * result

  for (let i = 1; i < nums.length; i++) {
    let dividend = remain * 100 + nums[i]
    let divisor = result * 20
    let quotient = Math.floor(dividend / divisor)

    while ((remain = (dividend - (divisor + quotient) * quotient)) < 0) {
      quotient--
    }
    result = result * 10 + quotient
  }
  return result
};

module.exports = mySqrt