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
var postorderTraversal = function (root) {
  let nums = []
  let nodes = []
  let currNode = root
  while (currNode || nodes.length) {
    if (currNode) {
      nums.unshift(currNode.val)
      nodes.push(currNode)
      currNode = currNode.right
    } else {
      currNode = nodes.pop().left
    }
  }
  return nums
};

const TreeNode = require('../../../helper').TreeNode

let tree = TreeNode.creat([1, 2, 3, 4, 5, 6, 7, 8, null, null, 9, 10, 11, null, 12])

let nums = postorderTraversal(tree)
console.log(nums)