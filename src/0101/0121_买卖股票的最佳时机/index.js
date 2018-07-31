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
      minIdx = maxIdx = i
    } else if(prices[i] > prices[minIdx]) {
      max = Math.max(max, prices[i] - prices[minIdx])
      maxIdx = i
    }
  }
  return max
};

module.exports = maxProfit