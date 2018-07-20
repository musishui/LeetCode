/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  function findMinIdx(left, right) {
    let minIdx = left
    for (let i = left + 1; i <= right; i++) {
      if (heights[i] < heights[minIdx]) {
        minIdx = i
      }
    }
    return minIdx
  }

  function getMaxArea (left, right) {
    if(left>right) return 0
    if (left === right) return heights[left]
    let minIdx = findMinIdx(left, right)
    let max =  heights[minIdx] * (right - left + 1)
    return Math.max(max, getMaxArea(left, minIdx-1), getMaxArea(minIdx+1, right))
  }

  return getMaxArea(0, heights.length-1)
};

module.exports = largestRectangleArea