/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length
  if (nums[0] > target || nums[len - 1] < target) return [-1, -1]
  let res = indexOf(nums, target, 0, len - 1)
  if (res.idx === -1) return [-1, -1]
  let indexs = [res.idx, res.idx]
  let leftTemp = res
  while (true) {
    if (leftTemp.idx >= 0) {
      indexs[0] = leftTemp.idx
    }
    if (leftTemp.idx > 0 && nums[leftTemp.idx - 1] === target) {
      leftTemp = indexOf(nums, target, leftTemp.left, leftTemp.idx - 1)
    } else {
      break
    }
  }
  let rightTemp = res
  while (true) {
    if (rightTemp.idx >= 0) {
      indexs[1] = rightTemp.idx
    }
    if (rightTemp.idx < len - 1 && nums[rightTemp.idx + 1] === target) {
      rightTemp = indexOf(nums, target, rightTemp.idx + 1, rightTemp.right)
    } else {
      break
    }

  }
  return indexs
};

function indexOf(nums, target, left, right) {
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2)
    if (nums[mid] === target) {
      return {
        left,
        right,
        idx: mid
      }
    } else if (nums[mid] > target) {
      right -= 1
    } else {
      left += 1
    }
  }
  return {
    left: -1,
    right: -1,
    idx: -1
  }
}

module.exports = searchRange