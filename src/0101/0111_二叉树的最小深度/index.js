/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  let level = 1
  let nodes = [root]
  let len = 0
  for (let i = 0; i <= len; i++) {
    if (nodes[i].left || nodes[i].right) {
      nodes[i].left && nodes.push(nodes[i].left)
      nodes[i].right && nodes.push(nodes[i].right)
    } else {
      break
    }
    if (i === len) {
      level += 1
      len = nodes.length-1
    }
  }
  return level
};

module.exports = minDepth