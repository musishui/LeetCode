/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1)
  dp.fill(Number.MAX_VALUE)
  dp[0] = 0

  let max_square_index = ~~(Math.sqrt(n)) + 1
  let square_nums = []
  for (let i = 1; i < max_square_index; ++i) {
    square_nums[i] = i * i
  }
  for (let i = 1; i <= n; ++i) {
    for (let s = 1; s < max_square_index; ++s) {
      if (i < square_nums[s])
        break
      dp[i] = Math.min(dp[i], dp[i - square_nums[s]] + 1)
    }
  }
  return dp[n]

};

console.log(numSquares(12))