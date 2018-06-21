/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let cache = new Map()

  function fun(m, n) {
    let key = `${m}_${n}`
    let value = cache.get(key)
    if (value !== undefined) return value
    value = grid[m][n]
    if (m > 0 && n > 0) {
      value += Math.min(fun(m, n - 1), fun(m - 1, n))
    } else if (n > 0) {
      value += fun(m, n - 1)
    } else if (m > 0) {
      value += fun(m - 1, n)
    }
    cache.set(key, value)
    return value
  }
  return fun(grid.length - 1, grid[0].length - 1)
};

module.exports = minPathSum