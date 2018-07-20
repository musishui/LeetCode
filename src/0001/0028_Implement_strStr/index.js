/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  const hLen = haystack.length
  const nLen = needle.length
  if (hLen <= nLen && haystack !== needle) return -1

  for (let i = 0, l = hLen - nLen; i <= l; i++) {
    let j = 0
    for (; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === nLen) {
      return i
    }
  }
  return -1
};
console.log(strStr('aaaaa', 'aaaaa'))
module.exports = strStr