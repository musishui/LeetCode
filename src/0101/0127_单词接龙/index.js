/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const isNext = (str1, str2) => {
    let diffCount = 0
    for (let i = 0, l = str1.length; i < l; i++) {
      if (str1[i] !== str2[i]) {
        diffCount++
        if (diffCount > 1) return false
      }
    }
    return true
  }
  let endIdx = wordList.indexOf(endWord)
  if (endIdx < 0) return 0
  let used = []

  const helper = (strs, step) => {
    let arr = []
    for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < wordList.length; j++) {
        if (!used[j]) {
          if (isNext(strs[i], wordList[j])) {
            if (j === endIdx) return step
            else {
              arr.push(wordList[j])
              used[j] = true
            }
          }
        }
      }
    }
    if (arr.length) return helper(arr, step + 1)
    else return 0
  }
  return helper([beginWord], 2)
};

module.exports = ladderLength