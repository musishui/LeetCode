/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  coins = coins.sort((a, b) => a - b)
  const min = coins[0]
  const cache = {}
  coins.forEach(key => cache[key] = 1)
  const fn = (amount) => {
    if (cache[amount]) return cache[amount]
    if (amount === 0) {
      return 0
    } else if (amount < min) {
      return -1
    } else {
      let res = -1
      for (let i = coins.length; i--;) {
        let count = fn(amount - coins[i])
        if (count != -1) {
          res = res > 0 ? Math.min(res, count + 1) : count + 1
        }
      }
      cache[amount] = res
      return res
    }
  }
  return fn(amount)
};

console.log(coinChange([186, 419, 83, 408], 6249))