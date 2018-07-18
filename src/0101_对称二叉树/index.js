/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const TreeNode = require('../../helper').TreeNode
var isSymmetric = function (root) {
  if (root == null) return true
  let nodes = [root]
  let hasNode = true
  while (hasNode) {
    hasNode = false
    let tmpNodes1 = []
    let tmpNodes2 = []
    for (let i = 0, j = nodes.length - 1; i <= j; i++, j--) {
      if (!nodes[i] ^ !nodes[j]) return false
      else if (nodes[i]) {
        if (nodes[i].val !== nodes[j].val) return false
        else {
          hasNode = true
          tmpNodes1.push(nodes[i].left, nodes[i].right)
          if (i !== j) {
            tmpNodes2.unshift(nodes[j].left, nodes[j].right)
          }
        }
      }
    }
    nodes = tmpNodes1.concat(tmpNodes2)
  }
  return true
};

module.exports=isSymmetric