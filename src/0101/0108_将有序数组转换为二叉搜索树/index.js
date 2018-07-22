/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const TreeNode = require('../../../helper').TreeNode
var sortedArrayToBST = function (nums, left, right) {
  if (nums == null || nums.length == 0) return null
  return helper(nums, 0, nums.length - 1)

  function helper(nums, left, right) {
    let mid = Math.ceil((left + right) / 2)
    let node = new TreeNode(nums[mid])
    if (left < mid) {
      node.left = helper(nums, left, mid - 1)
    }
    if (right > mid) {
      node.right = helper(nums, mid + 1, right)
    }
    return node
  }
};

module.exports = sortedArrayToBST