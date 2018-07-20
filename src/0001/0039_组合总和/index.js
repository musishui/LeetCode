/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  if (candidates[0] > target) return []
  return fun(candidates, target, 0)
};

function fun(candidates, target, index) {
  let res = []
  for (let i = index; i < candidates.length; i++) {
    let num = candidates[i]
    if (num > target) break
    if (num === target) {
      res.push([num])
      break;
    } else if (target - num >= candidates[i]) {
      let arrs = fun(candidates, target - num, i)
      if (arrs.length) {
        arrs.forEach(item => item.push(num))
        res.push(...arrs)
      }
    }
  }
  return res
}

module.exports = combinationSum