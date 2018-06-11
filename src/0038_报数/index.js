/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let rs = "1"
  while (--n) {
    let char = rs[0]
    let cnt = 1
    let ls = []
    for (let i = 1; i < rs.length; i++) {
      if (char === rs[i]) {
        cnt += 1
      } else {
        ls.push(cnt, char)
        cnt = 1
        char = rs[i]
      }
    }
    ls.push(cnt, char)
    rs = ls.join('')
  }
  return rs
};

module.exports = countAndSay