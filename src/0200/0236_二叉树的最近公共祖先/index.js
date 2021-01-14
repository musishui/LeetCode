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
  let nodes = []
  let ns = []
  function deep(node) {
    nodes.push(node)
    if (node.val === p.val || node.val === q.val) {
      ns.push(nodes.slice(0))
    }
    if (ns.length === 2) return
    if (node.left) {
      deep(node.left)
    }
    if (node.right) {
      deep(node.right)
    }
    nodes.pop()
  }
  deep(root)
  let i = 0
  while (ns[0][i] === ns[1][i]) {
    i++
  }
  return ns[0][i - 1]
};

let root = TreeNode.creat([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
console.log(lowestCommonAncestor(root, 5, 1).val)