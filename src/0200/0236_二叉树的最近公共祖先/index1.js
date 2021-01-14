/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { TreeNode } = require("../../../helper");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans
  function deep(node) {
    if (node === null || ans) return false
    let eq = node.val === p.val || node.val === q.val
    let l = deep(node.left)
    if (eq && l) {
      ans = node
      return true
    }
    let r = deep(node.right)
    if (l && r || r && eq) {
      ans = node
    }
    return l || r || eq
  }
  deep(root)
  return ans
};

let root = TreeNode.creat([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
console.log(lowestCommonAncestor(root, { val: 5 }, { val: 4 }).val)