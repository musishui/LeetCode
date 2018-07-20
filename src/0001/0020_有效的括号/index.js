/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true
  if (s.length % 2) return false
  let obj = {
    ']': '[',
    ')': '(',
    '}': '{'
  }
  let stack = []
  for (var i = 0; i < s.length; i++) {
    let char = s[i]
    let val = obj[char]
    let len = stack.length
    if (val) {
      if (len && val === stack[len - 1]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return !stack.length
};

module.exports = isValid