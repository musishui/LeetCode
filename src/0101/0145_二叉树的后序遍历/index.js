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
  if (!root) return nums
  let nodes = [{ ...root, flag: 1 }]
  let currNode = nodes[0]
  while (nodes.length) {
    let flag = currNode.flag 

    if (flag > 2 || !(currNode.left || currNode.right)) {
      nums.push(currNode.val)
      nodes.pop()
      currNode = nodes[nodes.length - 1]
    } else {
      currNode.flag = flag + 2
      if (currNode.right) {
        currNode.right.flag = 1
        nodes.push(currNode.right)
      }
      if (currNode.left) {
        currNode.left.flag = 2
        nodes.push(currNode.left)
      }
      currNode = currNode.left || currNode.right
    }

  }
  return nums
};

const TreeNode = require('../../../helper').TreeNode

let tree = TreeNode.creat([1, 2, 3, 4, 5, 6, 7, 8, null, null, 9, 10, 11, null, 12])

let nums = postorderTraversal(tree)
console.log(nums)