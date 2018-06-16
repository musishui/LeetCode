/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let endIdx = height.length - 1
  let leftIdx = getMaxIdx(0, endIdx)
  let rightIdx = leftIdx
  let volumn = 0
  while (leftIdx > 0) {
    let idx = getMaxIdx(0, leftIdx - 1)
    getVolumn(idx, leftIdx)
    leftIdx = idx
  }
  while (rightIdx < endIdx) {
    let idx = getMaxIdx(rightIdx + 1, endIdx)
    getVolumn(rightIdx, idx)
    rightIdx = idx
  }

  return volumn

  function getMaxIdx(start, end) {
    let maxIdx = start
    for (let i = start + 1; i <= end; i++){
      if (height[i] > height[maxIdx]) {
        maxIdx = i
      }
    }
    return maxIdx
  }

  function getVolumn(start, end) {
    let max = Math.min(height[start], height[end])
    for (let i = start + 1; i < end; i++) {
      volumn += (max - height[i])
    }
  }
}

module.exports = trap