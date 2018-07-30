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
  let first = root.left || root.right
  while (first) {
    first = null
    let prevNode
    while (node) {
      [node.left, node.right].forEach(item => {
        if (item) {
          prevNode && (prevNode.next = item)
          prevNode = item
          first || (first = prevNode)
        }
      })
      node = node.next
    }
    node = first
  }
};

module.exports = connect