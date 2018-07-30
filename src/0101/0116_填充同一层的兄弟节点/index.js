/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  if (!root) return
  let node = root
  let first = root.left
  while (first) {
    while (node) {
      let {
        left,
        right
      } = node
      left.next = right
      node = node.next
      node && (right.next = node.left)
    }
    node = first
    first = node.left
  }
};

module.exports = connect