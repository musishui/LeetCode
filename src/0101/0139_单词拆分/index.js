/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if(!s ||!wordDict ||!wordDict.length) return false
  s = '0' + s
  let len = s.length
  let bpos = [true]
  for (let i = 1; i < len; i++){
    for (let j = 0; j < i; j++){
      bpos[i] = bpos[j] && wordDict.includes(s.substr(j + 1, i - j))
      if (bpos[i]) {
        break
      }
    }
  }
  return bpos[len-1]
};

module.exports = wordBreak