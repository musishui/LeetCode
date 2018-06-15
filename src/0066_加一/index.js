/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let bit = 1
  for (let l = digits.length; l--;) {
    let num = digits[l] + bit
    bit = num > 9 ? 1 : 0
    num = num > 9 ? num - 10 : num
    digits[l] = num
    if (bit < 1) {
      break;
    }
  }
  if (bit === 1) {
    digits.unshift(bit)
  }
  return digits
};

module.exports = plusOne