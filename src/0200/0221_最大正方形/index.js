/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0
  let nums = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === 0) {
        nums.push([])
      }
      if (matrix[i][j] === '0') {
        nums[i][j] = 0
      } else {
        let m = i - 1
        let n = j - 1
        let num = 1
        if (m >= 0 && n >= 0) {
          num = Math.min(nums[i][n], nums[m][j], nums[m][n]) + 1
        }
        nums[i][j] = num
        if (num > max) {
          max = num
        }
      }

    }
  }
  return max * max
};

let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]

console.log(maximalSquare(matrix))