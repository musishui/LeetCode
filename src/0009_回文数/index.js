/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let base = x
  let n = 0
  while (x > 0) {
    n = (n * 10 + x % 10)
    x = Math.floor(x/10)
  }
  return base === n
};

module.exports = isPalindrome
