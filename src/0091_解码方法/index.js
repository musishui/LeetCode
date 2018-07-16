/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let start = 0
  let preCode = 10
  let strs = []
  for (let i = 0; i < s.length; i++) {
    let code = +s[i]
    if (code > 2 || code == 0 || i == s.length - 1) {
      if (code > 6 && preCode == 2) {
        strs.push(i - start)
        start = i
      }
      if (code == 0) {
        if (preCode > 2) {
          return 0
        } else {
          strs.push(i - 1 - start)
          code = 10
        }
      } else {
        strs.push(i - start + 1)
      }
      start = i + 1
    }
    preCode = code
  }
  let sum = 1
  let cache = new Map()
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] < 2) continue
    if (!cache.has(i)) {
      let n = Math.floor(strs[i] / 2)
      let m = strs[i] % 2
      let num = 0
      while (n >= 0) {
        num += component(m, n + m)
        n--
        m += 2
      }
      cache.set(i, num)
    }
    sum *= cache.get(i)
  }
  return sum

  function component(m, n) {
    m = Math.min(m, n - m)
    n += 1
    let n1 = 1
    let n2 = 1
    for (i = 1; i <= m; i++) {
      n1 *= i
      n2 *= (n - i)
    }
    return n2 / n1
  }
};
module.exports = numDecodings