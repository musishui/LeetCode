/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head
  let idx = -n-1
  let delNode = null
  while (node != null) {
    idx++
    if (idx === 0) {
      delNode = head
    } else if (idx>0) {
      delNode = delNode.next
    }
    node = node.next
  }
  if (delNode) {
    delNode.next = delNode.next ? delNode.next.next : null
    return head
  } else {
    return head.next
  }
};

module.exports = removeNthFromEnd