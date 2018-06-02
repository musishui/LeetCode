/**
 * @param {string} digits
 * @return {string[]}
 */
const obj = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}
let count = 0
var letterCombinations = function (digits) {
  if (!digits) return []

  let groups = obj[digits[0]].map(c => c)
  for (let i = 1, l = digits.length; i < l; i++) {
    const len = groups.length
    let chars = obj[digits[i]]
    let cl = chars.length
    for (var n = len; n--;) {
      let base = groups[n]
      for (let j = cl; j--;) {
        count += 1
        groups[n * cl + j] = base + chars[j]
      }
    }
  }
  return groups
};

// console.log(JSON.stringify(letterCombinations('23')))

module.exports =  letterCombinations