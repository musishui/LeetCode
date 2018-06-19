/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let start = 1
  let result = []
  for (let i = 0; i < n; i++){
    result.push([])
  }
  n--
  for (let i = 0; i <= n; i++ , n--){
    if (i === n) {
      result[i][n] = start++
    } else {
      for (let k = i; k < n; k++){
        result[i][k] = start++
      }
      for (let k = i; k < n; k++){
        result[k][n] = start++
      }
      for (let k = n; k > i; k--){
        result[n][k] = start++
      }
      for (let k = n; k > i; k--){
        result[k][i] = start++
      }
    }
  }
  return result
};
let res = generateMatrix(3)
console.log(JSON.stringify(res))
module.exports = generateMatrix