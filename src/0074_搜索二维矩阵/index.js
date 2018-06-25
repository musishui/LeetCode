/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  let n = m ? matrix[0].length : 0
  if (!m || !n) return false
  if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false
  
  let start = 0
  let end = m - 1
  let rIdx = 0
  while(start<=end)
  {
    rIdx = Math.ceil((start + end) / 2)
    if (matrix[rIdx][0] > target) {
      end = rIdx-1
    } else if (matrix[rIdx][n - 1] < target) {
      start = rIdx+1
    } else {
      break
    }
  }
  if (end < start) return false
  start = 0
  end = n-1
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2)
    if (matrix[rIdx][mid] === target) {
      return true
    } else if (matrix[rIdx][mid] > target) {
      end = mid-1
    } else {
      start = mid+1
    }
  }
  return false
};

module.exports = searchMatrix