/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false
  let x1 = 0, x2 = matrix[0].length - 1
  let y1 = 0, y2 = matrix.length - 1

  const bs = (start, end, getVal) => {
    while (start < end) {
      let mid = ~~((start + end + 1) / 2)
      let val = getVal(mid)
      if (val === target) {
        return mid
      } else if (val > target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    return end
  }
  const bsx = (start, end, y) => bs(start, end, (x) => matrix[y][x])
  const bsy = (start, end, x) => bs(start, end, (y) => matrix[y][x])
  while (x1 <= x2 && y1 <= y2) {
    if (matrix[y1][x1] > target || matrix[y2][x2] < target) return false
    let idx, val
    idx = bsx(x1, x2, y1)
    val = matrix[y1][idx]
    if (val === target) return true
    x2 = val > target ? idx - 1 : idx
    if (x2 < x1) return false

    idx = bsx(x1, x2, y2)
    val = matrix[y2][idx]
    if (val === target) return true
    x1 = val < target ? idx + 1 : idx
    if (x2 < x1) return false

    idx = bsy(y1, y2, x1)
    val = matrix[idx][x1]
    if (val === target) return true
    y2 = val > target ? idx - 1 : idx
    if (y2 < y1) return false

    idx = bsy(y1, y2, x2)
    val = matrix[idx][x2]
    if (val === target) return true
    y1 = val < target ? idx + 1 : idx
    if (y2 < y1) return false
    
  }
  return false
};

const matrix = [[4,5,9,13,14],[6,10,15,20,23],[8,15,20,24,26]]
const target = 21
console.log(searchMatrix(matrix, target))