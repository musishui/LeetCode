/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  if (!root) return []
  //root.prev = root
  let nums = []
  let nodes = [root]
  let newRoot = root
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].left) {
      nodes[i].left.prev = nodes[i].prev
      nodes[i].prev && (nodes[i].prev.next = nodes[i].left)
      nodes[i].left.next = nodes[i]
      nodes.push(nodes[i].left)
      if (newRoot === nodes[i]) {
        newRoot = nodes[i].left
      }
    }
    if (nodes[i].right) {
      nodes[i].right.prev = nodes[i]
      nodes[i].right.next = nodes[i].next
      nodes[i].next = nodes[i].right
      nodes.push(nodes[i].right)
    }
  }
  while (newRoot) {
    nums.push(newRoot.val)
    newRoot = newRoot.next
  }
  return nums
};

module.exports = inorderTraversal