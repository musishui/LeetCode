/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = []
  let obj = {}
  for (let i = 0, l = strs.length; i < l; i++) {
    let key = sort(strs[i])
    if (!obj[key]) {
      obj[key] = []
      result.push(obj[key])
    }
    obj[key].push(strs[i])
  }

  return result

  function sort(str) {
    let arr = str.split('')
    return arr.sort().join('')
  }
};

module.exports = groupAnagrams