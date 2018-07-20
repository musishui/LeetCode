/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  function swap(i, j, m, n) {
    // let temp = matrix[i][j]
    // matrix[i][j] = matrix[m][n]
    // matrix[m][n] = temp

    [matrix[i][j], matrix[m][n]]=[ matrix[m][n],matrix[i][j]]
  }

  let len = matrix.length

  matrix.reverse()
  for (let i = 1; i < len; i++) {
    for (var j = 0; j < i; j++) {
      swap(i, j, j, i)
    }
  }
};

module.exports = rotate