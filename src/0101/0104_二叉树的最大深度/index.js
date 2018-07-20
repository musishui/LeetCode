/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, num = 0) {
  if (root == null) return num
  return Math.max(maxDepth(root.left, num+1), maxDepth(root.right, num+1))
};

module.exports = maxDepth