/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0) return false // 判空
  let y = matrix[0].length - 1;
  let x = 0;
  while (y >= 0 && x < matrix.length) {
    if (matrix[x][y] > target) {
      y--;
    } else if (matrix[x][y] < target) {
      x++;
    } else {
      return true;
    }
  }
  return false;
};

const matrix = [[4, 5, 9, 13, 14], [6, 10, 15, 20, 23], [8, 15, 20, 24, 26]]
const target = 21
console.log(searchMatrix(matrix, target))