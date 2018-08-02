/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0
  let maxs = [0]
  let max = 0
  let res = 0
  let minIdx = maxIdx = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[maxIdx]) {
      maxIdx = i
    } else if (prices[i] < prices[minIdx]) {
      minIdx = maxIdx = i
    }
    max = Math.max(max, prices[maxIdx] - prices[minIdx])
    maxs.push(max)
  }
  minIdx = maxIdx = prices.length - 1
  res = max
  max = 0
  for (let i = maxIdx ; i--;) {
    if (prices[i] < prices[minIdx]) {
      minIdx = i
    } else if (prices[i] > prices[maxIdx]) {
      minIdx = maxIdx = i
    }
    max = Math.max(max, prices[maxIdx] - prices[minIdx])
    res = Math.max(res, max + maxs[i])
  }
  return res
};
let a = maxProfit([8,3,6,2,8,8,8,4,2,0,7,2,9,4,9])
module.exports = maxProfit