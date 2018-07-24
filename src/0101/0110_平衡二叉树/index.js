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
var isBalanced = function (root) {
  return helper(root)[1]

  function helper(root) {
    if (!root) return [0, true]
    let left = helper(root.left)
    if (!left[1]) {
      return left
    }
    let right = helper(root.right)
    if (!right[1])
      return right
    else {
      let max = Math.max(left[0], right[0])
      let min = Math.min(left[0], right[0])
      return [max + 1, max - min <= 1]
    }
  }
};

module.exports = isBalanced