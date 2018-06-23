/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rows = new Set()
  let cols = new Set()
  for (let r = 0; r < matrix.length; r++){

    for (let c = 0; c < matrix[r].length; c++){
      if (matrix[r][c] === 0) {
        rows.add(r)
        cols.add(c)
        let row = r
        let col = c
        while (row--) {
          matrix[row][c] = 0
        }
        while (col--) {
          matrix[r][col] = 0
        }
      } else if(rows.has(r)||cols.has(c)){
        matrix[r][c] = 0
      }
    }
  }
};

module.exports = setZeroes