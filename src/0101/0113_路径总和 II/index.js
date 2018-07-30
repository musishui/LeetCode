/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = []
  root && helper(root, sum, [])
  return result

  function helper(root, sum, arr) {
    sum -= root.val
    arr.push(root.val)
    if (!root.left && !root.right && sum === 0) {
      result.push([...arr])
    } else {
      root.left && helper(root.left, sum, arr)
      root.right && helper(root.right, sum, arr)
    }
    arr.pop()
  }
};
const TreeNode = require('../../../helper').TreeNode
const input = TreeNode.creat([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
const input1 = 22
let output = pathSum(input, input1)
module.exports = pathSum