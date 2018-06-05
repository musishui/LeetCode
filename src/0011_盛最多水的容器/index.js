/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j = height.length - 1
  let max =0
  while (i < j) {
    let h = Math.min(height[i], height[j])
    max = Math.max(max, (j - i) * h)
    for (; i < j && height[i] <= h; i++){ }
    for (; j > i && height[j] <= h; j--){}
  }
  return max
};

module.exports = maxArea