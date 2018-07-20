/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length
  if (!len) return ''
  let prefix = strs[0]
  for (var i = 1; i < len; i++) {
    let n = 0
    while (n < prefix.length && prefix.charAt(n) === strs[i].charAt(n)) {
      n++
    }
    if (n === 0) {
      return ''
    }
    prefix = prefix.substring(0, n)
  }
  return prefix
};

module.exports = longestCommonPrefix