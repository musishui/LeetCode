/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return 
  helper(root)

  function helper(root) {
    let {
      left,
      right
    } = root
    let last=root
    if (left) {
      let node = helper(left)
      last.right = left
      last.left=null
      last = node
    }
    if (right) {
      let node = helper(right)
      last.right = right
      last.left=null
      last = node
    }
    return last
  }
};

module.exports = flatten