/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === n) return head
  let root = {
    next: head
  }
  let node = root
  let idx = 0
  let firstNode
  let prevNode
  while (idx++ <= n) {
    let nextNode = node.next
    if (idx > m) {
      node.next = prevNode
    } else if (idx === m) {
      firstNode = node
    }
    prevNode = node
    node = nextNode
  }
  firstNode.next.next = node
  firstNode.next = prevNode
  return root.next
};

module.exports = reverseBetween