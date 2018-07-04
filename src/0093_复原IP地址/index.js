/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const length = s.length
  if (length < 4 || length > 12) return []
  let ips = []
  let nums = []

  getIpNum(0, 0)
  return ips

  function getIpNum(i, idx) {
    let {
      max,
      min
    } = getLenValue(length - idx, 4 - i)
    if (s.charAt(idx) === '0') max = 1
    while (min <= max) {
      let num = +s.substr(idx, min)

      if (num >= 0 && num <= 255) {
        nums.push(num)
        if (i < 3) {
          getIpNum(i + 1, idx + min)
        } else {
          ips.push(nums.join('.'))
        }
        nums.pop()
      }
      min++
    }
  }

  function getLenValue(len, n) {
    let max = Math.min(3, len - n + 1)
    let min = Math.max(1, len - 3 * n + 3)
    return {
      max,
      min
    }
  }
};

module.exports = restoreIpAddresses