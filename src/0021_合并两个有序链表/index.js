/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let node1 = l1
  let node2 = l2
  let head = {
    next: null
  }
  let node3 = head
  while (node1 && node2) {
    if (node1.val > node2.val) {
      node3.next = node2
      node3 = node2
      node2 = node2.next
    } else {
      node3.next = node1
      node3 = node1
      node1 = node1.next
    }
  }
  node3.next = node1 || node2
  return head.next
};

module.exports = mergeTwoLists