/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0
  let stack = []
  let max = 0
  let cnt = 0
  for (let i = 0, l = s.length; i < l; i++) {
    let char = s[i]
    let prev = stack[stack.length - 1] || {}
    if (char === ')' && prev.char === '(') {
      stack.pop()
      cnt = prev.cnt + 2 + cnt
    } else {
      stack.push({
        cnt,
        char
      })
      max = Math.max(max, cnt)
      cnt = 0
    }
  }
  max = Math.max(max, cnt)
  return max
};

module.exports = longestValidParentheses