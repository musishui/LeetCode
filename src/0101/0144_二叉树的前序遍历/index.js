/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let nodes = []
  let nums = []
  let currNode = root
  while (currNode) {
    nums.push(currNode.val)
    if (currNode.right) {
      nodes.push(currNode.right)
    }
    if (currNode.left) {
      currNode = currNode.left
    } else {
      currNode = nodes.pop()
    }
  }
  return nums
};