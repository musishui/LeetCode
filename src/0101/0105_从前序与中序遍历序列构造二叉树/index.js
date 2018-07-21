/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const TreeNode = require('../../../helper').TreeNode
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0) return null
  let root = new TreeNode(preorder[0])
  let idx = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
  root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
  return root
};
//let node = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
module.exports = buildTree