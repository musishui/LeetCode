/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = []
  let prev = null
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (char === ' ') continue
    if (!isNaN(char)) {
      char = +char
      if (!isNaN(prev)) {
        stack.pop()
        char = prev * 10 + char
      }
    }
    prev = char
    stack.push(char)
  }
  let op
  for (let i = 1; i < stack.length; i += 2) {
    op = stack[i]
    if (op === '*' || op === '/') {
      let left = stack[i - 1]
      let right = stack[i + 1]
      let n = op === '*' ? left * right : Math.floor(left / right)
      stack.splice(i - 1, 3, n)
      i -= 2
    }
  }
  let result = stack[0]
  for (let i = 1; i < stack.length; i += 2) {
    op = stack[i]
    result = op === '+' ? result + stack[i + 1] : result - stack[i + 1]
  }
  console.log(stack)
  return result
};
