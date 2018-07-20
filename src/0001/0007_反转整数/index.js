/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let assert
  let mod
  if (x >= 0) {
    let max = Math.pow(2, 31) - 1
    assert = num => num <= max
    mod = num => Math.floor(num / 10)
  } else {
    let min = Math.pow(-2, 31)
    assert = num => num >= min
    mod = num => Math.ceil(num / 10)
  }
  let n = 0
  while (x) {
    let remainder = x % 10
    n = n * 10 + remainder
    if (assert(n)) {
      x = mod(x)
    } else {
      return 0
    }
  }
  return n
};
