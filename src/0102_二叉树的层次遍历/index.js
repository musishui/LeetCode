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
var levelOrder = function (root) {
  let result = []
  if (!root) return result
  let nodes = [root]
  // while (nodes.length) {
  //   let tmpNodes = []
  //   let nums = []
  //   for (let i = 0; i < nodes.length; i++){
  //     nums.push(nodes[i].val)
  //     nodes[i].left && (tmpNodes.push(nodes[i].left))
  //     nodes[i].right && (tmpNodes.push(nodes[i].right))
  //   }
  //   result.push(nums)
  //   nodes = tmpNodes
  // }
  let idx = 1 - 1
  let nums = []
  for (let i = 0; i <= idx; i++) {
    nums.push(nodes[i].val)
    nodes[i].left && (nodes.push(nodes[i].left))
    nodes[i].right && (nodes.push(nodes[i].right))
    if (i === idx) {
      result.push(nums)
      nums = []
      idx = nodes.length-1
    }
  }
  return result
};

module.exports = levelOrder