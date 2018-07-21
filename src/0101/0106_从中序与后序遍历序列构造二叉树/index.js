/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const TreeNode = require('../../../helper').TreeNode
var buildTree = function (inorder, postorder) {
  if (postorder.length == 0) return null
  let val = postorder.pop()
  let root = new TreeNode(val)
  let idx = inorder.indexOf(val)
  root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx ))
  root.right = buildTree(inorder.slice(idx + 1), postorder.slice(idx ))
  return root
};
// let node = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
module.exports = buildTree