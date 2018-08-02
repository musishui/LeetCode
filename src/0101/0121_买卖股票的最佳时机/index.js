/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let minIdx = 0
  let maxIdx = 0
  for (let i = 1; i < prices.length; i++){
    if (prices[i] < prices[minIdx]) {
      max = Math.max(max, prices[maxIdx] - prices[minIdx])
      minIdx = maxIdx = i
    } else if(prices[i] > prices[maxIdx]) {
      maxIdx = i
    }
  }
  if (maxIdx > 0) {
    max = Math.max(max, prices[maxIdx] - prices[minIdx])
  }
  return max
};
maxProfit([7,1,5,3,6,4])
module.exports = maxProfit