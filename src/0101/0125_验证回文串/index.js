/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j;) {
    if (!validate(i)) {
      i++
    } else if (!validate(j)) {
      j--
    } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    } else {
      i++
      j--
    }
  }

  return true

  function validate(idx) {
    let code = s.charCodeAt(idx)
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
  }
};

module.exports = isPalindrome