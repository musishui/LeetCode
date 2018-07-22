/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = []
  if (!root) return result
  let nodes = [root]
  
  let idx = 1 - 1
  let nums = []
  for (let i = 0; i <= idx; i++) {
    nums.push(nodes[i].val)
    nodes[i].left && (nodes.push(nodes[i].left))
    nodes[i].right && (nodes.push(nodes[i].right))
    if (i === idx) {
      result.unshift(nums)
      nums = []
      idx = nodes.length-1
    }
  }
  return result
};

module.exports = levelOrderBottom