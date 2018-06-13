/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  if (candidates[0] > target) return []
  let res = []
  fun(candidates, target, 0, [])
  return res

  function fun(candidates, target, index, arr) {
    for (let i = index; i < candidates.length; i++) {
      if(i-1>=index && candidates[i]===candidates[i-1]) continue
      let num = candidates[i]
      if (num > target) break
      if (num === target) {
        arr.push(num)
        res.push(arr)
        break;
      } else if (target - num >= candidates[i]) {
        fun(candidates, target - num, i+1, [...arr, num])
      }
    }
    return res
  }
};

module.exports = combinationSum2