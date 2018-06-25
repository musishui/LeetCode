/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length - 1
  let n = obstacleGrid[0].length - 1
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) {
    return 0
  }

  let map = new Map()

  function fun(m, n) {
    let key = `${m}_${n}`
    let count = map.get(key)
    if (count !== undefined) return count
    if (obstacleGrid[m][n] === 1) {
      count = 0
    } else {
      count = 0
      if (m > 0 || n > 0) {
        if (m > 0)
          count += fun(m - 1, n)
        if (n > 0)
          count += fun(m, n - 1)
      } else {
        count = 1
      }
    }
    map.set(key, count)
    return count
  }
  return fun(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
};
const input = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
]
let a = uniquePathsWithObstacles(input)
module.exports = uniquePathsWithObstacles