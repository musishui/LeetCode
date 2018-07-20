/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = (s || '').length
  if (len <= 1) {
    return s
  }
  let max = {
    left: 0,
    right: 0,
    len: 1
  }
  for (let i = 1; i < len; i++) {
    let s1 = getPalindrome(s, i-1, i )
    if (s1.len > max.len) {
      max = s1
    }
    if (s1.right === len - 1) {
      break
    }

    s1 = getPalindrome(s, i - 1, i + 1)
    if (s1.len > max.len) {
      max = s1
    }
    if (s1.right === len - 1) {
      break
    }
  }

  return s.substring(max.left,max.right+1)
};

function getPalindrome (s, left, right) {
  while (left >= 0 && right < s.length) {
    if (s.charAt(left) === s.charAt(right)) {
      left -= 1
      right += 1
    } else {
      break
    }
  }
  left += 1
  right -= 1
  return {
    left,
    right,
    len : Math.max(0, right - left+1)
  }
}

module.exports = longestPalindrome