/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const TreeNode = require('../../helper').TreeNode
var isValidBST = function (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (!root) return true
  const value = root.val
  if (value <= min || value >= max) return false
  return isValidBST(root.left, min, value) && !isValidBST(root.right, value, max)
};

module.exports = isValidBST