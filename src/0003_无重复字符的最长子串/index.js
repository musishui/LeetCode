/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = (s || '').length
  if (len <= 1) return len
  let left = 0
  let obj = {
    [s.charAt(0)]: 0
  }
  let maxSubLen = 1
  let subLen = 1
  for (let i = 1; i < len; i++) {
    let char = s.charAt(i)
    let val = obj[char] >= 0 ? obj[char] : -1
    if (val >= left) {
      left = obj[char] + 1
      subLen = i - obj[char]
    } else {
      subLen++
      maxSubLen = Math.max(maxSubLen, subLen)
    }
    obj[char] = i
  }
  return maxSubLen
};

//lengthOfLongestSubstring('abcabcbb')

module.exports = lengthOfLongestSubstring