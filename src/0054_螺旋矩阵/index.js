/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return []
  let result = []
  print(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1)
  return result

  function print(matrix, topIdx, bottomIdx, leftIdx, rightIdx) {
    if (topIdx > bottomIdx || leftIdx > rightIdx) return
    if (topIdx === bottomIdx) {
      for (let i = leftIdx; i <= rightIdx; i++) {
        result.push(matrix[topIdx][i])
      }
      return
    } else if (leftIdx === rightIdx) {
      for (let i = topIdx; i <= bottomIdx; i++) {
        result.push(matrix[i][rightIdx])
      }
      return
    }
    for (let i = leftIdx; i < rightIdx; i++) {
      result.push(matrix[topIdx][i])
    }
    for (let i = topIdx; i < bottomIdx; i++) {
      result.push(matrix[i][rightIdx])
    }
    for (let i = rightIdx; i > leftIdx; i--) {
      result.push(matrix[bottomIdx][i])
    }
    for (let i = bottomIdx; i > topIdx; i--) {
      result.push(matrix[i][leftIdx])
    }
    print(matrix, topIdx + 1, bottomIdx - 1, leftIdx + 1, rightIdx - 1)
  }

};
const input = [[1,2,3],[4,5,6],[7,8,9]]
spiralOrder(input)
module.exports = spiralOrder