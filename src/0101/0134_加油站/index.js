/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0
  let remain = 0
  let start = 0
  for (let i = 0; i < gas.length; i++) {
    let n = gas[i] - cost[i]
    sum += n
    remain += n
    if (remain < 0) {
      remain = 0
      start = i + 1
    }
  }
  return sum < 0 ? -1 : start
};

module.exports = canCompleteCircuit