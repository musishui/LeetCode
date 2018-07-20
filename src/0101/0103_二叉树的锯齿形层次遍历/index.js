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
var zigzagLevelOrder = function (root) {
  let result = []
  if (!root) return result
  let nodes = [root]
  let idx = 1 - 1
  let nums = []
  let mothed = "push"
  for (let i = 0; i <= idx; i++) {
    nums[mothed](nodes[i].val)
    nodes[i].left && (nodes.push(nodes[i].left))
    nodes[i].right && (nodes.push(nodes[i].right))
    if (i === idx) {
      result.push(nums)
      nums = []
      idx = nodes.length - 1
      mothed = mothed == 'push' ? 'unshift' : 'push'
    }
  }
  return result
};

module.exports = zigzagLevelOrder