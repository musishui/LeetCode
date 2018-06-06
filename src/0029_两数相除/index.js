/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let flag = true
  if (dividend < 0) {
    flag = !flag
    dividend = -dividend
  }
  if (divisor < 0) {
    flag = !flag
    divisor = -divisor
  }
  if (dividend < divisor) return 0
  let nums = [{
    val: divisor,
    cnt: 1
  }]
  let count = 0
  let i = 0

  while (dividend >= divisor) {
    let item = nums[i]
    if (dividend >= item.val) {
      count += item.cnt
      dividend -= item.val
    }
    if (dividend >= item.val) {
      nums.push({
        val: item.val + item.val,
        cnt: item.cnt + item.cnt
      })
      i++
    } else if (dividend < divisor) {
      break;
    } else {
      while (i && nums[--i].val > divisor) {}
    }
  }
  if (flag > 0) {
    let max = Math.pow(2, 31) - 1
    count = count > max ? max : count
  } else {
    count = -count
  }
  return count
};

module.exports = divide