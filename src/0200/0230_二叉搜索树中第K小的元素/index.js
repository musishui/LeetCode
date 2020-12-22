/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require("../../../helper");

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 1
  let loop = (node) => {
    let num
    num = node.left && loop(node.left)
    if (n === k) {
      num = node.val
    }
    n++
    if (n <= k) {
      num = node.right && loop(node.right)
    }
    return num
  }
  return loop(root)
};

let root = TreeNode.creat([5, 3, 6, 2, 4, null, null, 1])
console.log(kthSmallest(root, 3))