/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const cache = {}
  const fn = (amount) => {
    if (cache[amount]) return cache[amount]
    if (amount < 0) {
      return -1
    } else if (amount === 0) {
      return 0
    } else {
      let res = Number.MAX_VALUE
      for (let i = coins.length; i--;) {
        let count = fn(amount - coins[i])
        if (count != -1 && count < res) {
          res = count
        }
      }
      cache[amount] = res === Number.MAX_VALUE ? -1 : (res + 1)
      return cache[amount]
    }
  }
  return fn(amount)
};

console.log(coinChange([186, 419, 83, 408], 6249))