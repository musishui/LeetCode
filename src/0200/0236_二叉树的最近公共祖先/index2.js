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
  if (!root) return null

  if (root.val === q.val || root.val === p.val) return root
  const l = lowestCommonAncestor(root.left, p, q)
  const r = lowestCommonAncestor(root.right, p, q)

  if (l && r) return root
  return l || r
};

let root = TreeNode.creat([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
console.log(lowestCommonAncestor(root, { val: 4 }, { val: 5 }).val)