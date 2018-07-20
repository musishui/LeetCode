/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let num = 0
  let flag = 1
  let state = false
  let max = Math.pow(2, 31) - 1
  let min = Math.pow(-2, 31)
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    let n = str.charCodeAt(i) - 48
    if (n >= 0 && n <= 9) {
      num = num * 10 + n * flag
      if (num >= max) return max
      if(num<=min) return min
      state = true
    } else if (state) {
      break
    } else if (char === '+' ) {
      state = true
    } else if (char === '-') {
      flag = -1
      state = true
    } else if (char === ' ') {
      continue
    } else {
      break;
    }
  }
  return num
};

module.exports = myAtoi
